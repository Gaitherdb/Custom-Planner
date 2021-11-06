const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedTodos: [Todo]
  }

  type Todo {
    task: String!
    day: [Day]
  }
  
  type Day {
    month: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input TodoInput {
    task: String!
    day: String!
    month: String!
    notesId: String!
  }

  type Query {
    users: [User]
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveTodo(input: TodoInput!): User
    deleteTodo(todoId: String!): User
  }
`;

module.exports = typeDefs;