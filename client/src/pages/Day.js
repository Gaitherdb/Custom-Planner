import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import NotesGroup from '../components/NotesGroup'

import { GET_ME } from '../utils/queries';

const DayTodo = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { todoId } = useParams();
  console.log(todoId)
  // const { loading, data } = useQuery(QUERY_TODO, {
  //   // pass URL parameter
  //   variables: { todoId: todoId },
  // });

  // const todoBody = data?.me || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // //bootstrap instead of className
  return (
    <div className="my-3">
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {todoId}
        </blockquote>
      </div>
    </div>
  );
};

export default DayTodo;
