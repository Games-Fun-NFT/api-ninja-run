const express = require('express')
const Router  = express.Router()

const RegisterUserController = require('../../controllers/RegisterUser/RegisterUserController')

Router.get('/:address', RegisterUserController.register)

module.exports = Router