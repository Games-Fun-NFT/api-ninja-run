const knex  = require('../../db/knex')

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

    if (showUser.length > 0) {
        res.json({
            showUserDB
        })
    }
}