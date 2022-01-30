const express = require('express')
const Router  = express.Router()

const BuyNftController = require('../../controllers/BuyNft/BuyNftBoxTwoController')

Router.get('/:address', BuyNftController.buy)

module.exports = Router