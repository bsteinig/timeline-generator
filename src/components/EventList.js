import React, {useState} from 'react';
import Event from './Event'; 
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

function EventList({ events, removeEvent, addEvent }){   

    const [eventE, setEvent] = useState({
        id: "",
        title: "",
        description: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        addEvent({...eventE, id: uuidv4() });
        setEvent({...eventE, title: "", description: ""});
    }

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
            <li>
                <div className="Add-item">
                    <Button onClick={handleSubmit} type="submit" variant="secondary">+</Button>
                </div>
            </li>
        </ul>
    )
}

export default EventList;