import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SAVE_TODO } from '../utils/mutations';
// import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';


function NoteForm(props) {
  let { dayId } = useParams();
  if (!dayId) {
    dayId = new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
  } 

  const date = dayId;
  const [task, setTask] = useState('');
  const [saveTodo, { error }] = useMutation(SAVE_TODO);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveTodo({
        variables: {
          task,
          date
        },
      });
      
      setTask('');
    } catch (err) {
      console.error(err);
    }
  };


 
  // Add the new Note list item to the existing array of objects
  // const newNote = [item, ...note];
  // console.log(newNote);

  // Call setNote to update state with our new set of Note list items
  // setNote(newNote);
  // };


    // const handleChange = (e) => {
    //     setTask(e.target.value);
    //   };
    return (
        <div>
          <h3>Todo List</h3>
    
          {Auth.loggedIn() ? (
            <>
             
              <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
              >
                <div className="col-12 col-lg-9">
                  <textarea
                    name="notes"
                    placeholder="Add todo item"
                    value={task}
                    className="form-input w-100"
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={(e) => setTask(e.target.value)}
                  ></textarea>
                </div>
    
                <div className="col-12 col-lg-3">
                  <button className="btn btn-primary btn-block py-3 dark-color" type="submit">
                    Add Todo Item
                  </button>
                </div>
                {error && (
                  <div className="col-12 my-3 bg-danger text-white p-3">
                    {error.message}
                  </div>
                )}
              </form>
            </>
          ) : (
            <p>
              You need to be logged in to share your thoughts. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>
      );
    };
    // return !props.edit ? (
    //     <div>
    //         <form className="note-form" onSubmit={props.onSubmit()}>
    //         <input
    //       type="text"
    //       placeholder="Add to your notes"
    //       value={inputTask}
    //       name="text"
    //       className="bucket-input"
    //       onChange={}
    //     ></input>
        
    //         <button className="bucket-button">Add bucket list item</button>
    //     </form>
    //     </div>
    //     ) : (
    //         <div>
    //             <h3>Update entry: {props.edit.value}</h3>
    //   <form className="bucket-form" onSubmit={props.onSubmit()}>
    //     <input
    //       type="text"
    //       placeholder={props.edit.value}
    //       value={inputTask}
    //       name="text"
    //       className="bucket-input"
    //       onChange={handleChange}
    //     ></input>
    //     <button className="bucket-button">Update</button>
    //     </form>
    //         </div>
    //     );
    // }

export default NoteForm