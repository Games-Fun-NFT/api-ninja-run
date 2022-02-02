const express = require('express')
const Router  = express.Router()

const SelectNftController = require('../../controllers/SelectNft/SelectNftController')

Router.get('/:address', SelectNftController.select)

module.exports = Router