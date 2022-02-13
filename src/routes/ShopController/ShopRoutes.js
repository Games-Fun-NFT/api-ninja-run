const express = require('express')
const Router  = express.Router()

const ShopController = require('../../controllers/ShopController/ShopController')

Router.get('/:address/:item', ShopController.shop)

module.exports = Router