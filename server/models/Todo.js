const { Schema } = require('mongoose');
const daySchema = require('./Day');
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `Todo` array in User.js
const todoSchema = new Schema({
  task:{
     type: String,
     required: true,
  },
  day: [daySchema],
  //might not need if schemas get their own id
  todoId: {
    type: String,
    required: true,
  },
});

module.exports = todoSchema;
