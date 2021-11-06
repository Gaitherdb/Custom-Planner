import React, { useState } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';

function NoteList() {
  const [note, setNote] = useState([]);
  console.log(note);

  // Function to add a Note list item
  const addNoteItem = (item) => {
    console.log(
      '🚀 ~ file: NoteList.js ~ line 10 ~ addNoteItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.task) {
      return;
    }

    // Add the new Note list item to the existing array of objects
    const newNote = [item, ...note];
    console.log(newNote);

    // Call setNote to update state with our new set of Note list items
    setNote(newNote);
  };

  // Function to mark Note list item as complete
  const completeNoteItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedNote = note.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedNote);
    setNote(updatedNote);
  };

  // Function to remove Note list item and update state
  const removeNoteItem = (id) => {
    const updatedNote = [...note].filter((item) => item.id !== id);

    setNote(updatedNote);
  };

  // Function to edit the Note list item
  const editNoteItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.task) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setNote((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

//created a group of notes component. 
//line6 renders a note component. (multiple notes can be tacked underneach to create a note group or list of notes)

// const notes = [
//     {
//         id: 1,
//         title: 'This is my first note',
//         text: 'blah blah blah',
//         complete: false,
//         timestamp: 0
//     },
//     {
//         id: 1,
//         title: 'This is my first note',
//         text: 'blah blah blah',
//         complete: false,
//         timestamp: 0
//     },

// ]

// map will iterate through the array of notes and return a SJX element for each note
// the note data is passed to the note component as props titeled content

    return (
        <div>
      <h1>What is on your note list?</h1>
      <NoteForm onSubmit={addNoteItem} />
      <Note
        note={note}
        completeNoteItem={completeNoteItem}
        removeNoteItem={removeNoteItem}
        editNoteItem={editNoteItem}
      ></Note>
    </div>
  );
}
//         < div className = 'notes-group'> 
//             {notes.map(n => <NoteForm content={n} />)}
//             This is notes
//         </div>
//     )
// }

export default NoteList;