import React, { useEffect, useState } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EditEventForm from './components/EditEventForm';
import Navbar from 'react-bootstrap/Navbar';

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
    setEvents([ ...events, event]);
  }

  function removeEvent(id){
    setEvents(events.filter(event => event.id !== id));
  }


  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand>Timeline JS Generation Tool</Navbar.Brand>
      </Navbar>
      <header className="App-header">
        <EventForm addEvent={addEvent} />
        <EventList events={events} removeEvent={removeEvent} addEvent={addEvent} />
      </header>
    </div>
  );
}

export default App;
