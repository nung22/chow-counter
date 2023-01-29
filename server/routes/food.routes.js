const express = require('express');

const { 
  handleGetAllFoods,
  handleCreateFood,
  handleGetFoodById,
  handleUpdateFoodById,
  handleDeleteFoodById 
} = require('../controllers/food.controller');

const router = express.Router();

router.get('/', handleGetAllFoods);
router.post('/new', handleCreateFood);
router.get('/:id', handleGetFoodById);
router.put('/:id', handleUpdateFoodById);
router.delete('/:id', handleDeleteFoodById);

module.exports =  { foodRouter: router }