const express = require('express')
const app     = express()
const cors    = require('cors')

app.use(cors({
    origin: '*'
}))
app.use(express.json())

// routes

const RegisterUserRoutes     = require('./routes/RegisterUser/RegisterUserRoutes')
const ShowUserRoutes         = require('./routes/ShowUser/ShowUserRoutes')
const BuyNftRoutes           = require('./routes/BuyNft/BuyNftRoutes')
const DepostiRoutes          = require('./routes/Deposit/DepositRoute')
const ShowNftRoutes          = require('./routes/BuyNft/ShowNftRoutes')
const ReloadLifeRoutes       = require('./routes/ReloadLife/ReloadLifeRoutes')
const TokenAcessRoutes       = require('./routes/AcessToken/AcessTokenRoutes')
const WinGameRoutes          = require('./routes/AcessToken/WinGame/WinGameRoutes')
const selectNftRoutes        = require('./routes/AcessToken/SelectNavRoutes/SelectNavRoutes')
const damageUserRoutes       = require('./routes/AcessToken/DamageLife/DamageLifeRoutes')
const IndexRoute             = require('./routes/Index/IndexRoute')

app.use('/', IndexRoute)
app.use('/register', RegisterUserRoutes)
app.use('/user', ShowUserRoutes)
app.use('/buy', BuyNftRoutes)
app.use('/deposit', DepostiRoutes)
app.use('/show', ShowNftRoutes)
app.use('/reload', ReloadLifeRoutes)
app.use('/token', TokenAcessRoutes)
app.use('/win', WinGameRoutes)
app.use('/nft', selectNftRoutes)
app.use('/damage', damageUserRoutes)

//

module.exports = app