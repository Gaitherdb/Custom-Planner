import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { Link, Route, useHistory} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NotesGroup from '../components/NotesGroup'
// import { useMutation } from '@apollo/client';
// import { SAVE_TODO } from '../utils/mutations';
import Auth from '../utils/auth';

// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';


const Home = () => {
  const [value, onChange] = useState(new Date());
  const view = "month";
  var params = (value.toString().split(' ').slice(1,4).join().replace(/,/g, ""));
  const history = useHistory();
  const handleClick = () => history.push(`/day/${params}`);
  
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
        
        </Container>
      </Jumbotron>

      <Container>
      <Calendar
      //testing things out
      
     showNavigation={true}
      onChange={onChange}
      value={value}
      view={view}
      onClickDay={handleClick}


      
      />
             
          <NotesGroup/>
         
        
      </Container>
    </>
  );
};

export default Home;
