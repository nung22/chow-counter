const { User } = require("../models/user.model");

const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

const deleteUserById = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  return deletedUser;
};

const updateUserById = async (userId, data) => {
  const updatedUser = await User.findByIdAndUpdate(userId, data,
    {
      // re-run our validations
      runValidators: true,  
    }
    );
  return updatedUser;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};