const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const responseTime = require('response-time');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(responseTime());
app.use(cors());
// app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Demo Express Web Application Home Page</h1>');
});

app.use('/api', require('./routes/api.routes.js'));

app.use('/fib', require('./routes/fibonacci.routes.js'));

module.exports = app;