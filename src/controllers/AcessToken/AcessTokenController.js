const knex  = require('../../db/knex')

const jwt   = require('jsonwebtoken')

async function showUser (token)
{

    try 
    {
        return knex('user').select('*').where('token_acess', token)

    } catch (error) 
    {
        return error
    }

    
}

exports.token = async (req, res) => {
    let token_acess = req.params.token

    let showUserDB = await showUser(token_acess)

    if (showUserDB.length === 1) {
        let id = showUserDB[0].id

        console.log(id)

        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: "10h" // expires in 5min
          });


        console.log(process.env.SECRET)
        
        res.json({
            message: 'OK',
            code: 200,
            token
        })
    }
    else 
    {
        res.json({
            message: 'Fail Login',
            code:  400
        })
    }
    
}