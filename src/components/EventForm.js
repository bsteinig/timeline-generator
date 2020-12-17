import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

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
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Group as={Form.Row} controlId="titleTextArea">
                        <Form.Label column sm="2">Title:</Form.Label>
                        <Col sm="10">
                        <Form.Control name="title" as="input" value={event.task} onChange={handleTaskInputChange} placeholder="Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Form.Row} controlId="descriptionTextArea">
                        <Form.Label column>Author:</Form.Label>
                        <Form.Control name="Author" value={event.description} onChange={handleDescInputChange} placeholder="Author" />
                    </Form.Group>
                </FormGroup>
            </Form>
    )
}

export default EventForm;


