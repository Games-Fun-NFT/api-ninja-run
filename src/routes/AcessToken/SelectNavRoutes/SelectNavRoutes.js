const express = require('express')
const Router  = express.Router()

const SelectNavRoutes = require('../../../controllers/AcessToken/SelectNavGameController/SelectNavGameController')

Router.get('/:token', SelectNavRoutes.select)

module.exports = Router