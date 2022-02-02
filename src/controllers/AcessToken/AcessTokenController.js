const knex  = require('../../db/knex')

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
        res.json({
            message: 'OK',
            code: 200
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