const express = require('express')
const Router  = express.Router()

const BuyNftController = require('../../controllers/BuyNft/BuyNftController')

Router.get('/:address', BuyNftController.buy)

module.exports = Router