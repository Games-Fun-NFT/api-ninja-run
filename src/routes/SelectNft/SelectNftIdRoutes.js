const express = require('express')
const Router  = express.Router()

const SelectNftController = require('../../controllers/SelectNft/SelectNftIdController')

Router.get('/:id', SelectNftController.selectId)

module.exports = Router