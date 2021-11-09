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
  mutation saveTodo($task: String!, $date: String!) {
    saveTodo(task: $task, date: $date) {
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
  mutation deleteTodo($_id: String!) {
    deleteTodo(_id: $_id) {
        _id
        username
        savedTodos{
          _id
          task
          createdAt
          day
           
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($_id: String!, $task: String!) {
    updateTodo(_id: $_id, task: $task) {
        _id
        username
        savedTodos{
          _id
          task
          createdAt
          day
           
      }
    }
  }
`;
