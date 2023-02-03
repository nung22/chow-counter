const express = require('express');

const { 
  handleGetAllUsers,
  handleRegisterUser,
  handleLoginUser,
  handleLogoutUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById 
} = require('../controllers/user.controller');

const { authenticate } = require('../config/jwt.config');

const router = express.Router();

router.get('/', authenticate, handleGetAllUsers);
router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);
router.get('/logout', handleLogoutUser);
router.get('/:id', handleGetUserById);
router.put('/:id', handleUpdateUserById);
router.delete('/:id', handleDeleteUserById);

module.exports =  { userRouter: router }