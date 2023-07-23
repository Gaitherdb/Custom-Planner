const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const cron = require('node-cron');
const resetDailies = require('./utils/resetDailies');

const app = express();
const PORT = process.env.PORT || 3001;

async function checkResetDailies() {
  const lastResetTime = await getLastResetTime();
  const currentTime = new Date();
  const oneDay = 24 * 60 * 60 * 1000;

  if (!lastResetTime || currentTime - lastResetTime >= oneDay) {
    resetDailies();
    setLastResetTime(currentTime);
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Add context to our server so data from the `authMiddleware()` function can pass data to our resolver functions
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
resetDailies();
cron.schedule('0 0 * * *', checkResetDailies);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
