const { Schema } = require('mongoose');
const daySchema = require('./Day');
const dateFormat = require('../utils/dateFormat');
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `Todo` array in User.js
const todoSchema = new Schema({
  task:{
     type: String,
     required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  date: {
    type: String,
    required: true
  },
});

module.exports = todoSchema;
