const express = require('express')
const Router  = express.Router()

const ShowNftController = require('../../controllers/BuyNft/ShowNftController')

Router.get('/:address', ShowNftController.buy)

module.exports = Router