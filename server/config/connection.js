const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
console.log(process.env.DB_HOST)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/afternoon-hamlet-16859', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
