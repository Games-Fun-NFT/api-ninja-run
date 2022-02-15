const knex  = require('../../db/knex')
const jwt   = require('jsonwebtoken')

async function showUser (addressUser)
{

    try 
    {
        return knex('user').select('*').where('address', addressUser)

    } catch (error) 
    {
        return error
    }

    
}

exports.user = async (req, res) => {
    let userAddres = req.params.address

    let showUserDB = await showUser(userAddres)

    if (showUser.length === 1) {


        let id = showUserDB[0].id

        console.log(id)

        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: "10h" // expires in 5min
          });


        console.log(process.env.SECRET)
        
        res.set('x-access-token', token)
        res.json({
            showUserDB,
            auth: true,
            token: token
        })
    }
}