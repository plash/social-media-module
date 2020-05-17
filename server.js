require('dotenv').config();
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./server/schema/index');

const app = express();

app.use(cors());

//connecting to mongodb
mongoose.connect(process.env.MONGO_DB_URI, (err) => {
  if (err) throw err;
  console.log("connected to mongo");
})

//add the schema to graphql-express 
app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
  '/graphql',
  graphqlHTTP(({
    schema: schema,
    graphiql: true,
  })),
);
app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
});