const express = require('express');

const { 
  getRandomRestaurant
} = require('../controllers/restaurant.controller');

const router = express.Router();

router.get('/random', getRandomRestaurant);

module.exports =  { restaurantRouter: router }