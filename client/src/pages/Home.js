import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useMutation } from '@apollo/client';
// import { SAVE_TODO } from '../utils/mutations';
// import Auth from '../utils/auth';

// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const Home = () => {
  // const datesToAddContentTo = [tomorrow, in3Days, in5Days];
  // function tileContent({ date, view }) {
  //   // Add class to tiles in month view only
  //   if (view === 'month') {
  //     // Check if a date React-Calendar wants to check is on the list of dates to add class to
  //     if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
  //       return 'My content';
  //     }
  //   }
  // }

  const [value, onChange] = useState(new Date());
  

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
        <Calendar onChange={onChange}
        // defaultView="day"
        value={value}
        // tileContent={tileContent}
        defaultView={"day"}
        
       
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
