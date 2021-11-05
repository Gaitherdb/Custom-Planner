import Note from './Note';
import React, { useState } from 'react';
//created a group of notes component. 
//line6 renders a note component. (multiple notes can be tacked underneach to create a note group or list of notes)

const NotesGroup = () => {
    return (
        < div className = 'notes-group'> 
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
}

export default NotesGroup;