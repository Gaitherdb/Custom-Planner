import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
// import 'react-calendar/dist/Calendar.css';
// import { useMutation } from '@apollo/client';
// import { SAVE_TODO } from '../utils/mutations';
// import Auth from '../utils/auth';

// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const Home = () => {

  const [value, onChange] = useState(new Date());
  

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
        <DatePicker onChange={onChange}
        value={value}
        defaultView={'month'}
      />
        </Container>
      </Jumbotron>

      <Container>
        
        <CardColumns>
         
        </CardColumns>
      </Container>
    </>
  );
};

export default Home;
