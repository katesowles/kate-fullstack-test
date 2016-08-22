const express = require('express');
const app = module.exports = express();
const images = require('./routes/images');

app.use('/api/images', images);

app.use((err, request, response) => {
  response.status(400).json(err);
});

module.exports = app;
