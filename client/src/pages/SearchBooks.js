import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
// import 'react-calendar/dist/Calendar.css';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';
import { searchGoogleBooks } from '../utils/API';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchBooks = () => {

  const [value, onChange] = useState(new Date());
  // create state for holding returned google api data
  // const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  // const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  // const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  // const [saveTodo, { error }] = useMutation(SAVE_TODO);
  // // useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // useEffect(() => {
  //   return () => saveBookIds(savedBookIds);
  // });

  // create method to search for books and set state on form submit
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput) {
  //     return false;
  //   }

  //   try {
  //     const response = await searchGoogleBooks(searchInput);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     const { items } = await response.json();

  //     const bookData = items.map((book) => ({
  //       bookId: book.id,
  //       authors: book.volumeInfo.authors || ['No author to display'],
  //       title: book.volumeInfo.title,
  //       description: book.volumeInfo.description,
  //       image: book.volumeInfo.imageLinks?.thumbnail || '',
  //     }));

  //     setSearchedBooks(bookData);
  //     setSearchInput('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // create function to handle saving a book to our database
  // const handleSaveBook = async (TodoId) => {
    // // find the Todo in `searchedTodos` state by the matching id
    // const TodoToSave = searchedTodos.find((Todo) => Todo.TodoId === TodoId);
    // console.log(TodoToSave);
    // // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    // try {
    //   const {data} = await saveTodo({ variables: { input: TodoToSave }});
     
    //  console.log(data);

    //   // if Todo successfully saves to user's account, save Todo id to state
    //   setSavedTodoIds([...savedTodoIds, TodoToSave.TodoId]);
    // } catch (err) {
    //   console.error(err);
    // }
  // };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
        <DatePicker onChange={onChange}
        value={value}
        defaultView={'month'}
      />
          
          {/* <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='notesInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a book'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form> */}
        </Container>
      </Jumbotron>

      <Container>
        {/* <h2>
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : 'Search for a book to begin'}
        </h2> */}
        <CardColumns>
          {/* {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveBook(book.bookId)}>
                      {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                      {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                          {error.message}
                        </div>
                      )}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })} */}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchBooks;
