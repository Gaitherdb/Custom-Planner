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
    _id: ID!
    task: String
    createdAt: String
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveTodo(task: String, date: String): User
    deleteTodo(todoId: String!): User
  }
`;

module.exports = typeDefs;
