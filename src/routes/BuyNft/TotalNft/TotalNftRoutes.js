const express = require('express')
const Router  = express.Router()

const TotalNft = require('../../../controllers/BuyNft/TotalBuy/TotalBuyController')

Router.get('/', TotalNft.total)

module.exports = Router