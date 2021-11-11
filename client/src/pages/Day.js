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
// Jumbotron, Container, Col, Form, Button, Card, CardColumns 
const DayTodo = (props) => {
  const { dayId } = useParams();
  const { loading, data, refetch } = useQuery(GET_ME);
  let todos = data?.me || [];
  
  const [value, setValue] = useState(new Date());
  const view = "month";
  const history = useHistory();
  const firstUpdate = useRef(true);
  var renderNoteList;


  if (todos.savedTodos) {
    
    if (!loading) {
      var thisPageTodo = todos.savedTodos.filter(todo => todo.date === dayId)
      //if they have ever posted before, they can see the notes section. We link part of the prop in the note section, and if they dont have todos it'll break
      renderNoteList = true;
    }
  }
  //for calender
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    history.push(`/day/${(value.toString().split(' ').slice(1, 4).join().replace(/,/g, ""))}`); // This is be executed when the state changes
  }, [value]);

  
  return (
    <div className="my-3">
      <div className="py-4">
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

      <Container>
        <Calendar
          showNavigation={true}
          onChange={setValue}
          value={value}
          view={view}
        />
        <NoteForm
          value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
         {...{refetch}}
        />
        {renderNoteList ? (
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteList
              todos={thisPageTodo}
              value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
              {...{refetch}}
            />
          )}
        </div>
        ) : (<div>Add a note?</div>)}
      </Container>

    </div>
  );
};

export default DayTodo;
