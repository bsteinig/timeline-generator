import React from 'react';

function Event({ event, removeEvent }){

    function handleRemoveClick(){
        removeEvent(event.id);
    }

    return (
        <div className = "Event-item">
        
            <li>
                    {event.task}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Event;