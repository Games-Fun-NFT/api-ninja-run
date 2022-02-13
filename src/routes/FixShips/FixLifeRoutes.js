const express = require('express')
const Router  = express.Router()

const FixRoundsController = require('../../controllers/FixShips/FixLifeController')

Router.get('/:id', FixRoundsController.fixRounds)

module.exports = Router