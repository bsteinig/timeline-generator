import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state, [event.name]: event.value
  }
}


function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <h1>Timeline Entry Form</h1>
      { submitting && <div> Submitting Form with: 
          <ul> 
            {Object.entries(formData).map(([name,value]) => (
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>))}
          </ul>
        </div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Event Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
