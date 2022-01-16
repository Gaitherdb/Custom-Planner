import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import NoteList from '../components/NoteList';
import 'react-calendar/dist/Calendar.css';
import NoteForm from '../components/NoteForm';
import { GET_ME } from '../utils/queries';

const { loading, data, refetch } = useQuery(GET_ME);
const todos = data?.me || [];
var renderNoteList;

console.log(todos)

if (todos.savedTodos) {

    if (!loading) {
        var thisMonthTodo = todos.savedTodos.filter(todo => todo.date === monthId)
        //if they have ever posted before, they can see the notes section. We link part of the prop in the note section, and if they dont have todos it'll break
        renderNoteList = true;
        var monthDate;
    }
}

const Month = (props) => {
    if (!todos) {
        return <h3>No notes yet</h3>;
      }

    return (
        <>
            <Container className="wholeCon">
                <div className="todolDiv text-center">
                    {renderNoteList ? (
                        <div className="col-12 col-md-8 mb-3">
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                {
                                    todos.map((todo) => (
                                        <div className='dark-color d-flex mb-1'
                                            key={todo._id} >

                                        </div>
                                    ))
                                })};
                            
                        </div>
                    ) : (<div>Add a note?</div>)};


                </div>

            </Container>
        </>
    );
};

export default Month;