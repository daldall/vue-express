const express = require('express')

const router = express.Router();

const verifyToken = require('../middlewares/auth')

const registerController = require('../controllers/RegisterController');

const loginController = require('../controllers/LoginController');

const { findUsers, createUser, findUserById, updateUser, deleteUser } = require('../controllers/UserController')

const { validateRegister, validateLogin } = require('../utils/validators/auth');

const { validateUser } = require('../utils/validators/user');

router.post('/register', validateRegister, registerController.register);

router.post('/login', validateLogin, loginController.login);

router.get('/admin/users', verifyToken, findUsers)

router.post('/admin/users', verifyToken, validateUser, createUser)

router.get('/admin/users/:id', verifyToken, findUserById)

router.put('/admin/users/:id', verifyToken, validateUser, updateUser)

router.delete('/admin/users/:id', verifyToken, deleteUser)

module.exports = router