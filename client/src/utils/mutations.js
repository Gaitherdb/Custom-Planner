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
      task
      createdAt
      date
      isComplete
      repeat
      completedDate
    }
  }
`;

export const EDIT_TODO = gql`
  mutation editTodo($todosId: ID!, $task: String!, $date: String!) {
    editTodo(todosId: $todosId, task: $task, date: $date) {
      _id
      task
      createdAt
      date
      isComplete
      repeat
      completedDate
    }
  }
`;
export const EDIT_ISCOMPLETE = gql`
  mutation editIsComplete($todosId: ID!, $isComplete: Boolean) {
    editIsComplete(todosId: $todosId, isComplete: $isComplete) {
      _id
      task
      createdAt
      date
      isComplete
      repeat
      completedDate
    }
  }
`;

export const REPEAT_TODO = gql`
  mutation repeatTask($todosId: ID!, $repeat: Boolean) {
    repeatTask(todosId: $todosId, repeat: $repeat) {
      _id
      task
      createdAt
      date
      isComplete
      repeat
      completedDate
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($todosId: ID!) {
    deleteTodo(todosId: $todosId) {
      _id
      task
      createdAt
      date
      isComplete
    }
  }
`;

