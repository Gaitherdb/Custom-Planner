import React, { useState } from 'react';
import { dayId } from '../App'

 
const TodoHeader = () => {
   return (
       <header>
           <h1>${dayid} To Do List</h1>
       </header>
   );
};
 
export default TodoHeader;