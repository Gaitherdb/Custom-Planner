import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NoteList = ({ todos }) => {
  let { dayId } = useParams();
  if (!dayId) {
    dayId = new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
  } 
  console.log("todos")
  console.log(todos)
  if (!todos) {
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
          </div>
        ))}
    </div>
  );
};

export default NoteList;


// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import NoteForm from './NoteForm';
// import Note from './Note';
// import { SAVE_TODO } from '../utils/mutations';
// import Auth from '../utils/auth';

// function NoteList(props) {
  // const [note, setNote] = useState();
  // // const [notes, setNotes] = useState([]);
  // const [saveTodo] = useMutation(SAVE_TODO);
  // console.log("what")
  // console.log(props.value);

  // // Function to add a Note list item
  // const addNoteItem = async (item) => {
  //   console.log(
  //     '🚀 ~ file: NoteList.js addNoteItem ~ item',
  //     item
  //   );
  //   // Check to see if the item text is empty
  //   // if (!item.task) {
  //   //   return;
  //   // }
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }
  //   try {
  //     const { data } = await saveTodo({
  //       variables: {task: note},
  //     });

  //     setNote('');
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   // Add the new Note list item to the existing array of objects
  //   // const newNote = [item, ...note];
  //   // console.log(newNote);

  //   // Call setNote to update state with our new set of Note list items
  //   // setNote(newNote);
  // };

  // // Function to mark Note list item as complete
  // const completeNoteItem = (id) => {
  //   // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
  //   let updatedNote = note.map((item) => {
  //     if (item.id === id) {
  //       item.isComplete = !item.isComplete;
  //     }
  //     return item;
  //   });

  //   console.log(updatedNote);
  //   setNote(updatedNote);
  // };

  // // Function to remove Note list item and update state
  // const removeNoteItem = (id) => {
  //   const updatedNote = [...note].filter((item) => item.id !== id);

  //   setNote(updatedNote);
  // };

  // // Function to edit the Note list item
  // const editNoteItem = (itemId, newValue) => {
  //   // Make sure that the value isn't empty
  //   if (!newValue.task) {
  //     return;
  //   }

  //   // We use the "prev" argument provided with the useState hook to map through our list of items
  //   // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
  //   setNote((prev) =>
  //     prev.map((item) => (item.id === itemId ? newValue : item))
  //   );
  // };



// map will iterate through the array of notes and return a SJX element for each note
// the note data is passed to the note component as props titeled content

//     return (
//         <div>
//       <h1>What is on your note list?</h1>
//       <NoteForm
//       value={props.value}
//        onSubmit={addNoteItem} />
//       <Note
//         note={note}
//         completeNoteItem={completeNoteItem}
//         removeNoteItem={removeNoteItem}
//         editNoteItem={editNoteItem}
//       ></Note>
//     </div>
//   );
// }
//         < div className = 'notes-group'> 
//             {notes.map(n => <NoteForm content={n} />)}
//             This is notes
//         </div>
//     )
// }

// export default NoteList;