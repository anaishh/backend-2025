const express = require('express')
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { loginUser, registerUser } = require('../controllers/auth.js')
const router = express.Router()

router.post('/register', validatorRegister, registerUser);

router.post('/login', validatorLogin, loginUser);

module.exports = router