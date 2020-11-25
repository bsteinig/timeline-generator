import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function EventForm({ addEvent }) {
    const [event, setEvent] = useState({
        id: "",
        task: "",
        description: "",
    });

    function handleTaskInputChange(e) {
        setEvent({ ...event, task: e.target.value});
    }

    function handleDescInputChange(e) {
        setEvent({ ...event, description: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (event.task.trim()) {
            addEvent({...event, id: uuidv4() });
            setEvent({...event, task: event.task, description: event.description});
        }else{
            addEvent({...event, id: uuidv4() });
            setEvent({...event, task: "", description: ""});
        }
    }

    return (
        <form onSubmit={handleSubmit} className="Entry-form">
            <p>Title:  </p>
            <input 
                name="task"
                type="text"
                value={event.task}
                onChange={handleTaskInputChange}/>
            <br></br><p>Description:   </p>
            <input 
                name="description"
                type="text"
                value = {event.description}
                onChange={handleDescInputChange}/>
            <button type="submit" className = "button">Submit</button>
        </form>
    )
}

export default EventForm;