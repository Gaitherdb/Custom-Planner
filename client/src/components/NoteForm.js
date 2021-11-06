// TO-DO: Create a Controlled field where a users input persists
import Note from './Note';
import React, { useState } from 'react';


// this class is responsible for returning a standard format to the notes, so they are similar no matter what values are passed to it
// class Note{

function NoteForm(props) {
    const [inputTask, setTask] = useState('');
    console.log(inputTask);
  

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            task: inputTask
        });
        setTask('');
    };
    const handleChange = (e) => {
        setTask(e.target.value);
      };

    return !props.edit ? (
        <div>
            <form className="bucket-form" onSubmit={handleSubmit}>
            <input
          type="text"
          placeholder="Add to your notes"
          value={inputTask}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        
            <button className="bucket-button">Add bucket list item</button>
        </form>
        </div>
        ) : (
            <div>
                <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={inputTask}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <button className="bucket-button">Update</button>
        </form>
            </div>
        );
    }

export default NoteForm