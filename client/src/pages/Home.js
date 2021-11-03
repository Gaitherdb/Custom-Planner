import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { useMutation } from '@apollo/client';
// import { SAVE_TODO } from '../utils/mutations';
import Auth from '../utils/auth';

// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';


const Home = () => {
  const [value, onChange] = useState(new Date());
  const [view, setView] = useState("month");
  const [day, setDay] = useState("")
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
        
        </Container>
      </Jumbotron>

      <Container>
      <Calendar
      //testing things out
      showWeekNumbers
     showNavigation={true}
      onChange={onChange}
      value={value}
      onChange={setView}
      view={view}
      onClickDay={console.log("hello")}
        
      // Auth.loggedIn() ? (.Link as{Link} to='/day'
      //   <>
      //     <.Link as={Link} to='/saved'>
      //       See Your Books
      //     </Nav.Link>
      //     <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
      //   </>
      // ) : (
      //   <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
      // )}
      


      
      />
        {/* //  onChange={onChange}
        // defaultView="day"
        // value={value}
        // tileContent={tileContent}
        // defaultView={"day"} */}
        
       
      
        
        <CardColumns>
         
        </CardColumns>
      </Container>
    </>
  );
};

export default Home;
