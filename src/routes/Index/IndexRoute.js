const express = require('express')
const Router  = express.Router()

const indexController = require('../../controllers/IndexController')

Router.get('/', async (req, res) => {
    res.status(200).send('ok')
})

module.exports = Router