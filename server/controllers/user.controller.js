const { User } = require("../models/user.model");
const { 
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("../services/user.service");

const handleCreateUser = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    return res.json(newUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetUserById = async (req, res) => {
  const user = await getUserById(req.params.id);
  return res.json(user);
};

const handleDeleteUserById = async (req, res) => {
  try {
    const deletedUser = await deleteUserById(req.params.id);
    return res.json(deletedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleUpdateUserById = async (req, res) => {
  try {
    const updatedUser = await updateUserById(
      req.params.id,
      req.body
    );
    return res.json(updatedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleUpdateUserById,
};
