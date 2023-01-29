const { Food } = require("../models/food.model");

const createFood = async (data) => {
  const food = await Food.create(data);
  return food;
};

const getAllFoods = async () => {
  const foods = await Food.find();
  return foods;
};

const getFoodById = async (foodId) => {
  const food = await Food.findById(foodId);
  return food;
};

const deleteFoodById = async (foodId) => {
  const deletedFood = await Food.findByIdAndDelete(foodId);
  return deletedFood;
};

const updateFoodById = async (foodId, data) => {
  const updatedFood = await Food.findByIdAndUpdate(foodId, data,
    {
      // re-run our validations
      runValidators: true,  
    }
    );
  return updatedFood;
};

module.exports = {
  createFood,
  getAllFoods,
  getFoodById,
  deleteFoodById,
  updateFoodById,
};