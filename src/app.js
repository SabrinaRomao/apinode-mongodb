const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// App
const app = express();
// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true // a pedido da lib
});
// Load models
const Mentions = require('./models/mentions');
const db = mongoose.connection;

db.on('connected', () => {
  console.log("### ####")
  console.log("### ####")
  console.log('Mongoose Conectado e abertoooo agora funciona');
  console.log("### ####")
  console.log("### ####")
});

db.on('error', err => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log(
      'Mongoose default connection is disconnected due to application termination'
    );
    process.exit(0);
  });
});
// Load models

const Mentions = require('./models/mentions');

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const mentionsRoutes = require('./routes/mentions-routes');
app.use('/mentions', mentionsRoutes);


module.exports = app;
