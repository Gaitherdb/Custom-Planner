import React, { useState, useEffect, useRef } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';


const Home = () => {
  const { loading, data } = useQuery(GET_ME);
  console.log(data)
  const todos = data?.me || [];
  const [value, setValue] = useState(new Date());
  const view = "month";
  const history = useHistory();
  const firstUpdate = useRef(true);

  if (todos.savedTodos) {
    console.log("todos")
    console.log(todos.savedTodos)
    const todayDate = new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
    if (!loading) {
      var thisPageTodo = todos.savedTodos.filter(todo => todo.date === todayDate)
    }
    console.log("thispagetodo")
    console.log(thisPageTodo)
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    history.push(`/day/${(value.toString().split(' ').slice(1, 4).join().replace(/,/g, ""))}`); // This is be executed when the state changes
  }, [value]);


  return (
    <>
      {/* <Jumbotron fluid className='text-light bg-dark'>
        <Container>
        
        </Container>
      </Jumbotron> */}

      <Container>
        <Calendar
          showNavigation={true}
          onChange={setValue}
          value={value}
          view={view}
        />

        <NoteForm
          value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
        />
        {todos.savedTodos ? (
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteList
              todos={thisPageTodo}
              value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
            />
          )}
        </div>
        ) : (console.log("hi"))}

      </Container>
    </>
  );
};

export default Home;
