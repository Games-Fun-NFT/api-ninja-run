const express = require('express')
const Router  = express.Router()

const InventoryBombUseController = require('../../../controllers/InventoryController/InventoryBomb/InventoryBombUseController')

Router.get('/:token',  InventoryBombUseController.bomb)

module.exports = Router