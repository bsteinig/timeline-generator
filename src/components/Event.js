import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'


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
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"> ... </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>  <Button onClick={handleRemoveClick}>Delete</Button> </Dropdown.Item>
                    <Dropdown.Item>  <Button onClick={handleRemoveClick}>Edit</Button> </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
           
        </div>
    );
}

export default Event;