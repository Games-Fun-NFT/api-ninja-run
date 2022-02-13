const express = require('express')
const Router  = express.Router()

const ReloadLifeRoutes = require('../../controllers/ReloadLife/ReloadLifeController')

Router.get('/:address', ReloadLifeRoutes.reload)

module.exports = Router