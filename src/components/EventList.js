import React from 'react';
import Event from './Event'; 


function EventList({ events, removeEvent }){   
    return (
        <ul className="Event-list">
            {events.map(event => (
                <Event 
                key={event.id} 
                event={event} 
                removeEvent={removeEvent}
            />
            ))}
        </ul>
    )
}

export default EventList;