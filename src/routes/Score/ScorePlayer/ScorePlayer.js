const express = require('express')
const Router  = express.Router()

const ScorePlayerController = require('../../../controllers/ScoreController/ScorePlayer/ScorePlayerController')

Router.get('/:token/:score',  ScorePlayerController.rewards)

module.exports = Router