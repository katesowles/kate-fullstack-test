const express = require('express');
const app = module.exports = express();
const images = require('./routes/images');

app.use('/api/images', images);

// eslint-disable-next-line
app.use((err, request, response, next) => {
  response.status(400).json(err);
});

module.exports = app;
