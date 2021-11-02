const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const todoSchema = new Schema({
  task:{
     type: String,
  },
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  todoId: {
    type: String,
    required: true,
  },
});

module.exports = todoSchema;
