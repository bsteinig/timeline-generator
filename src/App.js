import React, { useEffect, useState } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const LOCAL_STORAGE_KEY = "react-event-list_events";

function App() {
  const [events, setEvents] = useState([]);

  useEffect( () =>  {
    const storageEvents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageEvents) {
      setEvents(storageEvents);
    }
  }, []);

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  function addEvent(event) {
    setEvents([event, ...events]);
  }

  function removeEvent(id){
    setEvents(events.filter(event => event.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Event</p>
        <EventForm addEvent={addEvent} />
        <EventList events={events} removeEvent={removeEvent}/>
      </header>
    </div>
  );
}

export default App;
