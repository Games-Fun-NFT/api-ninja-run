const app   = require('../src/app')
const port  = 80 || 443

app.listen(port, () => {
    console.log(`Server on ${port}`)
})