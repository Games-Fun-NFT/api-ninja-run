const express = require('express')
const app     = express()
const cookieParser = require('cookie-parser');
const cors    = require('cors')
const jwt     = require('jsonwebtoken')

app.use(cors())
app.use(cookieParser())
app.set('trust proxy', true)
app.use(express.json())

// routes

function verifyJWT(req, res, next){
    const token = req.headers['token-api']
    console.log(token)
    //let fetUser = fetch()
    //console.log(token)
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}

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
app.use('/user' , ShowUserRoutes)
app.use('/buy', verifyJWT ,BuyNftRoutes)
app.use('/deposit', verifyJWT ,DepostiRoutes)
app.use('/show',  verifyJWT, ShowNftRoutes)
app.use('/reload', verifyJWT , ReloadLifeRoutes)
app.use('/token', TokenAcessRoutes)
app.use('/win', verifyJWT ,WinGameRoutes)
app.use('/nft', verifyJWT ,selectNftRoutes)
app.use('/damage', verifyJWT ,damageUserRoutes)

//

module.exports = app