import React from 'react';
import Event from './Event'; 


function EventList({ events, removeEvent, addEvent }){   
    return (
        <ul className="Event-list">
            {events.map(event => (
                <Event 
                key={event.id} 
                event={event} 
                removeEvent={removeEvent}
                addEvent={addEvent}
            />
            ))}
        </ul>
    )
}

export default EventList;