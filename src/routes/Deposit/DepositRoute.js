const express = require('express')
const Router  = express.Router()

const DepositController = require('../../controllers/Deposit/DepositController')

Router.post('/:address/:hash/:balance', DepositController.deposit)

module.exports = Router