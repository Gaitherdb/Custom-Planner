import React, { useState, useEffect, useRef } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NotesGroup from '../components/NotesGroup';
import testie from '../components/Form';
// import { useMutation } from '@apollo/client';
// import { SAVE_TODO } from '../utils/mutations';
import Auth from '../utils/auth';

// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';


const Home = () => {
  const [value, onChange] = useState(new Date());
  // const [click, onClick] = useState(false)
  const view = "month";
  const history = useHistory();
  const firstUpdate = useRef(true);

  useEffect(() => {
    if(firstUpdate.current){
      firstUpdate.current = false;
      return;
    }
      history.push(`/day/${(value.toString().split(' ').slice(1,4).join().replace(/,/g, ""))}`); // This is be executed when the state changes
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
      onChange={onChange}
      value={value}
      view={view}
      />
             
          <NotesGroup/>
         
        <testie/>
      </Container>
    </>
  );
};

export default Home;
