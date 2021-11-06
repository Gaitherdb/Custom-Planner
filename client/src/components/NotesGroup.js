import Note from './Note';
import React, { useState } from 'react';
//created a group of notes component. 
//line6 renders a note component. (multiple notes can be tacked underneach to create a note group or list of notes)

const notes = [
    {
        id: 1,
        title: 'This is my first note',
        text: 'blah blah blah',
        complete: false,
        timestamp: 0
    },
    {
        id: 1,
        title: 'This is my first note',
        text: 'blah blah blah',
        complete: false,
        timestamp: 0
    },

]
// map will iterate through the array of notes and return a SJX element for each note
// the note data is passed to the note component as props titeled content
const NotesGroup = () => {
    return (
        < div className = 'notes-group'> 
            {notes.map(n => <Note content={n} />)}
            This is notes
        </div>
    )
}

export default NotesGroup;