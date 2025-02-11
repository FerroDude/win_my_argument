const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./src/config/config');
const routes = require('./src/routes');

const app = express();

// Middleware
app.use(morgan('dev')); // log every request to the console
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  })
);
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
});

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
