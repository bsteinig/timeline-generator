import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function EventForm({ addEvent }) {
    const [event, setEvent] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setEvent({ ...event, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (event.task.trim()) {
            addEvent({...event, id: uuidv4() });
            setEvent({...event, task: event.task});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="task"
                type="text"
                value={event.task}
                onChange={handleTaskInputChange}/>
            <button type="submit" className = "button">Submit</button>
        </form>
    )
}

export default EventForm;