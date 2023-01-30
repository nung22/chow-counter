const { Food } = require("../models/food.model");
const { 
  createFood,
  getAllFoods,
  getFoodById,
  deleteFoodById,
  updateFoodById,
} = require("../services/food.service");

const handleCreateFood = async (req, res) => {
  try {
    const newFood = await createFood(req.body);
    return res.json(newFood);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetAllFoods = async (req, res) => {
  try {
    const foods = await getAllFoods();
    return res.json(foods);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetFoodById = async (req, res) => {
  const food = await getFoodById(req.params.id);
  return res.json(food);
};

const handleDeleteFoodById = async (req, res) => {
  try {
    const deletedFood = await deleteFoodById(req.params.id);
    return res.json(deletedFood);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleUpdateFoodById = async (req, res) => {
  try {
    const updatedFood = await updateFoodById(
      req.params.id,
      req.body
    );
    return res.json(updatedFood);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  handleCreateFood,
  handleGetAllFoods,
  handleGetFoodById,
  handleDeleteFoodById,
  handleUpdateFoodById,
};
