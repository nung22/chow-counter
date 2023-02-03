const express = require('express');

const { 
  getRandomRestaurant,
  getRandomRecipe,
  getFoodInfo
} = require('../controllers/externalApi.controller');

const router = express.Router();

router.get('/random-restaurant', getRandomRestaurant);
router.get('/random-recipe', getRandomRecipe);
router.get('/search-ingredient', getFoodInfo);

module.exports =  { externalApiRouter: router }