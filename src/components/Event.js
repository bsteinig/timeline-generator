import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/Form'
import { v4 as uuidv4 } from 'uuid';


function Event({ event, removeEvent, addEvent }){

    const [eventE, setEvent] = useState({
        id: "",
        title: "",
        description: "",
    });

    function handleTaskInputChange(e) {
        setEvent({ ...eventE, title: e.target.value});
    }

    function handleDescInputChange(e) {
        setEvent({ ...eventE, description: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (eventE.title.trim()) {
            addEvent({...eventE, id: uuidv4() });
            setEvent({...eventE, title: eventE.title, description: eventE.description});
        }else{
            addEvent({...eventE, id: uuidv4() });
            setEvent({...eventE, title: "", description: ""});
        }
    }


    function handleRemoveClick(){
        removeEvent(event.id);
    }

    return (
        <div className = "Event-item">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Control name="title" as="input" value={eventE.title} onChange={handleTaskInputChange} placeholder="Event Title" />
                    <Form.Group controlId="descriptionTextArea">
                        <Form.Label>Event Description</Form.Label>
                        <Form.Control name="description" value={eventE.description} onChange={handleDescInputChange} as="textarea" rows={3} />
                    </Form.Group>
                </FormGroup>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
            <Button onClick={handleRemoveClick}  variant="primary">Delete</Button>            
        </div>
    );
}

export default Event;