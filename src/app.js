const express = require('express')
const app     = express()
const cors    = require('cors')

app.use(cors())
app.use(express.json())

// routes

const RegisterUserRoutes  = require('./routes/RegisterUser/RegisterUserRoutes')
const ShowUserRoutes      = require('./routes/ShowUser/ShowUserRoutes')
const BuyNftOneRoutes     = require('./routes/BuyNft/BuyNftBoxOneRoutes')
const BuyNftTwoRoutes     = require('./routes/BuyNft/BuyNftBoxTwoRoutes')
const BuyNftThreeRoutes   = require('./routes/BuyNft/BuyNftBoxThreeRoutes')
const SelectNftRoutes     = require('./routes/SelectNft/SelectNftRoutes')
const SelectIdFrontRoutes = require('./routes/SelectNft/SelectNftIdRoutes')
const FixRoundsRoutes     = require('./routes/FixShips/FixRoundsController')
const AcessTokenRoutes    = require('./routes/AcessToken/AcessTokenRoutes')
const SelectNavRoutes     = require('./routes/AcessToken/SelectNavRoutes/SelectNavRoutes')
const IndexRoute          = require('./routes/Index/IndexRoute')

app.use('/', IndexRoute)
app.use('/register', RegisterUserRoutes)
app.use('/user', ShowUserRoutes)
app.use('/onebuy', BuyNftOneRoutes)
app.use('/twobuy', BuyNftTwoRoutes)
app.use('/threebuy', BuyNftThreeRoutes)
app.use('/show', SelectNftRoutes)
app.use('/selectid', SelectIdFrontRoutes)
app.use('/rounds', FixRoundsRoutes)
app.use('/token', AcessTokenRoutes)
app.use('/token/select', SelectNavRoutes)
//

module.exports = app