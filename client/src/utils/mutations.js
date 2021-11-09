import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_TODO = gql`
  mutation saveTodo($_id: String, $task: String!, $date: String!) {
    saveTodo(_id: $_id, task: $task, date: $date) {
        _id
        username
        savedTodos{
            _id
           task
           createdAt
           date
        }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($todoId: String!) {
    deleteTodo(todoId: $todoId) {
        _id
        username
        savedTodos{
          task
          day
          month
          todoId  
      }
    }
  }
`;
