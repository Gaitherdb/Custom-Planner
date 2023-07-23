import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import dateHelp from '../utils/dateHelp';


const Home = (props) => {
  const { loading, data, refetch } = useQuery(GET_ME);
  const todos = data?.me || [];
  const [value, setValue] = useState(new Date());
  const view = "month";
  const history = useHistory();
  const firstUpdate = useRef(true);
  var renderNoteList;

  const year = dateHelp.getYear();
  const day = dateHelp.getDay();
  const monthLetters = dateHelp.getMonthLetters();
  const month = dateHelp.monthConversion(monthLetters);
  const todayDate = year + month + day;
  var valueDate;

  if (todos.savedTodos) {
    renderNoteList = true;

    if (!loading) {

      var inComplete = todos.savedTodos.filter(todo => todo.isComplete === false && todo.date <= todayDate);
      var thisPageTodo = todos.savedTodos.filter(todo => todo.date === todayDate);
      //finds the ids of all the incomplete todos
      var ids = new Set(inComplete.map(d => d._id));
      // Include completed todos that have the repeat field set to true
      // var repeatTodos = todos.savedTodos.filter(todo => todo.isComplete === true && todo.repeat === true);
      // // Reset the isComplete field of these todos to false
      // repeatTodos.forEach(todo => {
      //   todo.isComplete = false;
      // });
      //a list of all the incomplete todos and any todos created today except for any incomplete todos from today as they are already accounted for
      var merged = [...inComplete, ...thisPageTodo.filter(id => !ids.has(id._id))];
      // , ...repeatTodos

    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    let valueYear = dateHelp.getYear(value);
    let valueDay = dateHelp.getDay(value);
    let valueMonthLetters = dateHelp.getMonthLetters(value);
    let valueMonth = dateHelp.monthConversion(valueMonthLetters);
    valueDate = valueYear + valueMonth + valueDay;

    //changes the url to the date page for the date selected on the calendar
    history.push(`/day/${(valueDate)}`); // This is be executed when the state changes
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
        {/* value.toString().split(' ').slice(1, 4).join() */}
        <NoteForm
          value={todayDate}
          {...{ refetch }}
        />
        {renderNoteList ? (
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <NoteList
                todos={merged}
                value={todayDate}
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
