const express = require('express')
const Router  = express.Router()

const DepositController = require('../../controllers/Deposit/DepositController')

Router.post('/', DepositController.deposit)

module.exports = Router