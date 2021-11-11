import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteForm from '../components/NoteForm';

const NoteList = (props) => {
  var todos = props.todos
  let { dayId } = useParams();
  if (!dayId) {
    dayId = new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
  }
  console.log("todos array notelist")
  console.log(todos)
  
  const [edit, setEdit] = useState({
    _id: null,
    value: '',
  });
  
  //if the edit button is clicked, the empty edit state changes and now has an _id
  if (edit._id != '' && edit._id != null) {
    //send this single todo item info to the noteform
   return <NoteForm edit={edit} />;
  }

  if (!todos && !props.todosFromForm) {
    return <h3>No notes yet</h3>;
  }

  return (
    <div>
      <h3>What is on your note list?</h3>
      {todos &&
        todos.map((todo) => (
          <div key={todo._id} className="card mb-3 dark-color">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {todo.task}
            </h4>
            <div className="icons">
              
              <p onClick={() => setEdit({ _id: todo._id, value: todo.task})}> ✏️</p>
              {/* <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default NoteList;
