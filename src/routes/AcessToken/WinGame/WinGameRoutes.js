const express = require('express')
const Router  = express.Router()

const WinGameController = require('../../../controllers/AcessToken/WinGame/WinGameController')

Router.get('/:token', WinGameController.win)

module.exports = Router