const express = require('express')
const Router  = express.Router()

const SelectNavRoutes = require('../../../controllers/AcessToken/DamageLife/DamageLifeController')

Router.get('/:token', SelectNavRoutes.damage)

module.exports = Router