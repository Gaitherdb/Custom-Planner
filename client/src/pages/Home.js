import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';


const Home = (props) => {
  const { loading, data, refetch } = useQuery(GET_ME);
  const todos = data?.me || [];
  const [value, setValue] = useState(new Date());
  const view = "month";
  const history = useHistory();
  const firstUpdate = useRef(true);
  var renderNoteList;

  if (todos.savedTodos) {
    renderNoteList = true;
    const todayDate = new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
    if (!loading) {
      var inComplete = todos.savedTodos.filter(todo => todo.isComplete === false && todo.date <= todayDate);
      var thisPageTodo = todos.savedTodos.filter(todo => todo.date === todayDate);
      var ids = new Set(inComplete.map(d => d._id));
      var merged = [...inComplete, ...thisPageTodo.filter(id => !ids.has(id._id))];
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    history.push(`/day/${(value.toString().split(' ').slice(1, 4).join().replace(/,/g, ""))}`); // This is be executed when the state changes
  }, [value]);


  return (
    <>

      <Container className="wholeCon">
      <div className="calDiv">
        <Calendar
          showNavigation={true}
          onChange={setValue}
          value={value}
          view={view}
        />
         </div>

        <NoteForm
          value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
          {...{ refetch }}
        />
        {renderNoteList ? (
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <NoteList
                todos={merged}
                value={value.toString().split(' ').slice(1, 4).join().replace(/,/g, "")}
                {...{ refetch }}
              />
            )}
          </div>
        ) : (<div>Add a note?</div>)}

      </Container>
    </>
  );
};

export default Home;
