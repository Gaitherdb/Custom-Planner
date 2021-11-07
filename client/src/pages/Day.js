import React, { useState, useEffect, useRef } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { useHistory } from 'react-router-dom';


// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import NoteList from '../components/NoteList'


import 'react-calendar/dist/Calendar.css';

import NoteForm from '../components/NoteForm';

import { GET_ME } from '../utils/queries';

const DayTodo = () => {
  const { dayId } = useParams();
  console.log(dayId)
  const { loading, data } = useQuery(GET_ME);
  const todos = data?.me || [];
  //for calender
  const [value, onChange] = useState(new Date());
  // const [click, onClick] = useState(false)
  const view = "month";
  const history = useHistory();
  const firstUpdate = useRef(true);

  //also for calender
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    history.push(`/day/${(value.toString().split(' ').slice(1, 4).join().replace(/,/g, ""))}`); // This is be executed when the state changes
  }, [value]);

  // const { loading, data } = useQuery(QUERY_TODO, {
  //   // pass URL parameter
  //   variables: { todoId: todoId },
  // });

  // const todoBody = data?.me || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // //bootstrap instead of className
  return (
    <div className="my-3">
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          Date:_
          {dayId}

        </blockquote>
      </div>

<<<<<<< HEAD
      <Container className='calendar-container'>
      <Calendar
     showNavigation={true}
      onChange={onChange}
      value={value}
      view={view}
      />
=======
      <Container>
        <Calendar
          showNavigation={true}
          onChange={onChange}
          value={value}
          view={view}
        />
        <NoteForm
          value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
        />

        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteList
              todos={todos.savedTodos}
              value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
            />
          )}
        </div>
>>>>>>> 932fe3ef600739c0ec51621c8af12c3c055348a1
      </Container>

    </div>
  );
};

export default DayTodo;
