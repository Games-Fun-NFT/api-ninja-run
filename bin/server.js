const app   = require('../src/app')
require('dotenv/config')
const port  =  3000 || process.env.PORT

app.listen(port, () => {
    console.log(`Server on ${port}, ${process.env.PORT}`)
})