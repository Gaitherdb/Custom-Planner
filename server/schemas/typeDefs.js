const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedTodos: [Todo]
  }

  type Todo {
    _id: ID!
    task: String!
    createdAt: String
    date: String!
    isComplete: Boolean
    repeat: Boolean
    completedDate: String
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
    saveTodo(task: String!, date: String!): Todo
    editTodo(todosId: ID!, task: String!, date: String!): Todo
    editIsComplete(todosId: ID!, isComplete: Boolean): Todo
    repeatTask(todosId: ID!, repeat: Boolean): Todo
    deleteTodo(todosId: ID!): Todo
  }
`;

module.exports = typeDefs;
