const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `Todo` array in User.js
const ResetTimeSchema = new Schema({
    lastResetTime: Date,

});
const ResetTime = model('ResetTime', ResetTimeSchema);
module.exports = ResetTime;
