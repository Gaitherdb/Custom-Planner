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
  // console.log(new Date().toString().split(' '))

  if (todos.savedTodos) {
    renderNoteList = true;

     
    const year = dateHelp.getYear();
    console.log(year)
    const day = dateHelp.getDay();
    console.log(day)
    const monthLetters = dateHelp.getMonthLetters();
    console.log(monthLetters)
    const month = dateHelp.getMonth(monthLetters);
    console.log(month)
    

    const  todayDate =   year + month + day;
    var valueDate;
   

  
    // // console.log(todos.savedTodos[0].date >= todayDate)
    // console.log(todayDate)
    // // console.log(todos.savedTodos[17].date)
    // // join().replace(/,/g, "")
   
   
    // new Date().toString().split(' ').slice(1, 4).join().replace(/,/g, "");
    if (!loading) {
      
      var inComplete = todos.savedTodos.filter(todo => todo.isComplete === false && todo.date <= todayDate);
      var thisPageTodo = todos.savedTodos.filter(todo => todo.date === todayDate);
      //finds the ids of all the incomplete todos
      var ids = new Set(inComplete.map(d => d._id));
      //a list of all the incomplete todos and any todos created today except for any incomplete todos from today as they are already accounted for
      var merged = [...inComplete, ...thisPageTodo.filter(id => !ids.has(id._id))];
      
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
    let valueMonth = dateHelp.getMonth(valueMonthLetters);
    valueDate = valueYear + valueMonth + valueDay;
    console.log(dateHelp.getYear(value));
    console.log(dateHelp.getDay(value));
    console.log(dateHelp.getMonthLetters(value));
    console.log(valueDate)
    //changes the url to the date page for the date selected on the calendar
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
