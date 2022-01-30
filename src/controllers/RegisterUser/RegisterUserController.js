const knex  = require('../../db/knex')

async function registerUser (addressUser) 
{
    return knex('user').insert({ address: addressUser })
}

async function showUser (addressUser, res)
{

    try 
    {
        return knex('user').select('*').where('address', addressUser)

    } catch (error) 
    {
        return error
    }

    
}

exports.register = async (req, res) => {
    let userAddres = req.params.address

    let showUserDB = await showUser(userAddres, res)
    
    ///console.log(showUserDB)

    if (showUserDB.length === 0)
    {
        await registerUser(userAddres)

        res.json({
            message: 1
        })
    }

    if (showUserDB.length > 0)
    {
        res.json({
            message: 1
        })
    }

}