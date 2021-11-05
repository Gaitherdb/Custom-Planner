//note div will act as the parent div for the note component
import React, { useState } from 'react';
const Note = () => {
    return <div className='note'>
        <span>Whad up, this is a test for the first note.</span>
        <div className='note-footer'>
            <small>11/02/2021</small>
        </div>
        </div>;
};

export default Note;

