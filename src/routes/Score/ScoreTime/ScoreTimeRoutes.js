const express = require('express')
const Router  = express.Router()

const ScoreTimeController = require('../../../controllers/ScoreController/ScoreTime/ScoreTimeController')

Router.get('/',  ScoreTimeController.time)

module.exports = Router