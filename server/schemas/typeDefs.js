const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedNotes: [Notes]
  }

  type Notes {
    todo: [String]
    day: String!
    month: String!
    notesId: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input NotesInput {
    todo: [String]
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
    saveNotes(input: NotesInput!): User
    deleteNotes(notesId: String!): User
  }
`;

module.exports = typeDefs;