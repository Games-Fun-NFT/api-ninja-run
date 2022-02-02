const express = require('express')
const Router  = express.Router()

const AcessTokenController = require('../../controllers/AcessToken/AcessTokenController')

Router.get('/:token', AcessTokenController.token)

module.exports = Router