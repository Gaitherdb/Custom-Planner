import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import { useMutation } from '@apollo/client';
import { EDIT_ISCOMPLETE, DELETE_TODO } from '../utils/mutations';

const NoteList = (props) => {
  var todos = props.todos
  let { dayId } = useParams();
  if (!dayId) {
    dayId = new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
  }

  const [edit, setEdit] = useState({
    _id: null,
    value: '',
  });

  const [editIsComplete] = useMutation(EDIT_ISCOMPLETE);
  const [deleteTodo] = useMutation(DELETE_TODO);

  // Function to mark todo item as complete
  const completeTodo = async (id) => {
    let isComplete;
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedTodo = todos.filter(todo => todo._id === id);
    if (updatedTodo[0].isComplete === false) {
      isComplete = true;
    } else {
      isComplete = false;
    }

    let todosId = id;
console.log(todosId)
    try {
      const {data} = await editIsComplete({
        variables: {
          todosId,
          isComplete,
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  //if the edit button is clicked, the empty edit state changes and now has an _id
  if (edit._id !== '' && edit._id !== null) {
    //send this single todo item info to the noteform
    return <NoteForm edit={edit} />;
  }

  const handleDelete = async (id) => {
    let todosId = id.id;
    console.log("HEEEEEEEYYYYAAA")
    console.log(todosId)
    try {
      const {data} = await deleteTodo({
        variables: {
          todosId
        },
      });
      window.location.reload();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!todos) {
    return <h3>No notes yet</h3>;
  }

  return (
    <div>
      <h3>What is on your plate for today?</h3>
      {todos &&
        todos.map((todo) => (
          <div className={
            todo.isComplete
              ? `card mb-3 dark-color complete`
              : `card mb-3 dark-color`
          } key={todo._id} >
            <h4 key={todo._id} onClick={() => completeTodo(todo._id)} className="card-header text-light p-2 m-0">
              {todo.task}
            </h4>
            <div className="icons">

              <p onClick={() => setEdit({ _id: todo._id, value: todo.task })}> <span role="img" aria-label="edit">✏️</span></p>
              <p onClick={() => handleDelete({id: todo._id})}> 🗑️</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NoteList;
