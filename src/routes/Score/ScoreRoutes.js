const express = require('express')
const Router  = express.Router()

const ScoreController = require('../../controllers/ScoreController/Score')

Router.get('/', ScoreController.score)

module.exports = Router