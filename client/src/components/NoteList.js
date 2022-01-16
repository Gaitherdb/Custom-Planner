import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import { useMutation } from '@apollo/client';
import { EDIT_ISCOMPLETE, DELETE_TODO } from '../utils/mutations';
import Modal from 'react-bootstrap/Modal'



const NoteList = (props) => {
  var todos = props.todos;
  let { dayId } = useParams();
  if (!dayId) {
    dayId = new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
  }

  const [edit, setEdit] = useState({
    _id: null,
    value: '',
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    
    try {
      const { data } = await editIsComplete({
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
    try {
      const { data } = await deleteTodo({
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
      <h5 className="todolDiv text-center">
        What is on your plate?</h5>
      {todos &&
        todos.map((todo) => (
          <div className={
            //if todo is complete, cross it out and it'll disappear from home page if it's old
            todo.isComplete
              ? `dark-color d-flex mb-1 complete`
              : `dark-color d-flex mb-1`
            &&
            //if todo is incomplete and old, it'll have a red border around it
            todo.date < dayId
              ? `dark-color d-flex mb-1 redBorder`
              : `dark-color d-flex mb-1`

          }
         
            key={todo._id} >
            <button key={todo._id} onClick={() => completeTodo(todo._id)} className=" text-light mr-auto " id='todo-button'>
              {todo.task}
            </button>
            <p className="p-2" onClick={() => setEdit({ _id: todo._id, value: todo.task })}> <span role="img" aria-label="edit"><i className="far fa-edit accent-color-light"></i></span></p>
            <p className="p-2" variant="primary" onClick={handleShow} ><span role="img" aria-label="delete"><i className="far fa-trash-alt accent-color-light"></i></span> </p>
           
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><span role="img" aria-label="delete"><i className="far fa-trash-alt "></i></span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
          <button className="text-light" variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button className="text-light" variant="primary" onClick={() => handleDelete({ id: todo._id })}>Yes</button>
        </Modal.Footer>
      </Modal>
          </div>
        ))};

     

    </div>
  );
};

export default NoteList;
