const express = require('express');
const parser = require('body-parser').json();
const Image = require('../models/image');
const router = express.Router();

module.exports = router
  .get('/', (request, response, next) => {
    Image.find()
      .then(image => response.send(image))
      .catch( err => {
        next('there was an error getting images: ', err);
      });
  })

  .post('/', parser, (request, response, next) => {
    new Image(request.body).save()
      .then(saved => response.send(saved))
      .catch( () => {
        next('there was an error saving the images');
      });
  });
