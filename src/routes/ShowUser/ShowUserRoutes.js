const express = require('express')
const Router  = express.Router()

const ShowUserController = require('../../controllers/ShowUser/ShowUserController')

Router.get('/:address', ShowUserController.user)

module.exports = Router