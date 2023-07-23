import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { EDIT_TODO, SAVE_TODO } from '../utils/mutations';
import Auth from '../utils/auth';
import dateHelp from '../utils/dateHelp';


function NoteForm(props) {
  let { dayId } = useParams();

  if (!dayId) {

    const year = dateHelp.getYear();
    const day = dateHelp.getDay();
    const monthLetters = dateHelp.getMonthLetters();
    const month = dateHelp.monthConversion(monthLetters);
    const todayDate = year + month + day;
    dayId = todayDate;
  }

  const date = dayId;
  const [task, setTask] = useState('');
  const [repeat, setRepeat] = useState(false);
  const [todosId, set_id] = useState('');
  const [saveTodo, { error }] = useMutation(SAVE_TODO);
  const [editTodo] = useMutation(EDIT_TODO);


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await saveTodo({
        variables: {
          task,
          date,
          repeat
        },
      });
      setTask('');
      console.log(data);
      //calls for the query on either the homepage or daypage to run again
      props.refetch();
    } catch (err) {
      console.error(err);
    }
  };

  function handleRepeatChange(e) {
    setRepeat(e.target.checked);
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await editTodo({
        variables: {
          todosId,
          task,
          date,
        },
      });
      setTask('');
      set_id('');
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="todolDiv">
      <h3>To-Do List</h3>

      {Auth.loggedIn() ? (
        !props.edit ? (
          <>
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <div className="col-12 col-lg-9">
                <textarea
                  name="notes"
                  placeholder="New task..."
                  value={task}
                  className="form-input w-200"
                  style={{ lineHeight: '1.5', resize: 'vertical' }}
                  onChange={(e) => setTask(e.target.value)}
                ></textarea>

                <label>
                  Repeat:
                  <input
                    type="checkbox"
                    checked={repeat}
                    onChange={handleRepeatChange}
                  />
                </label>

              </div>



              <div className="col-12">
                <button className="btn btn-block py-3 button dark-color" type="submit">
                  Add to your list
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          </>
        ) : (<div>
          <h3>Update task: {props.edit.value}</h3>
          <form className="" onSubmit={handleEditSubmit}>
            <input
              type="text"
              placeholder={props.edit.value}
              value={task}
              name="text"
              onChange={(e) => {
                setTask(e.target.value); set_id(props.edit._id)
              }}
            ></input>
            <button className="upbutton">Update</button>
          </form>
        </div>
        )
      ) : (
        <p>
          You need to be logged in to start a todo list.
        </p>
      )}
    </div>
  );
};

export default NoteForm
