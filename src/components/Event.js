import React from 'react';

function Event({ event, removeEvent }){

    function handleRemoveClick(){
        removeEvent(event.id);
    }

    return (
        <div className = "Event-item">
            <li>
                    <h4>{event.task}</h4><br/>
                    <p className="Description">{event.description}</p>
            </li>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ...
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Event;