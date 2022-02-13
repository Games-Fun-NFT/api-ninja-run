const express = require('express')
const Router  = express.Router()

const InventoryBombController = require('../../../controllers/InventoryController/InventoryBomb/InventoryBombController')

Router.get('/:token',  InventoryBombController.bomb)

module.exports = Router