const knex  = require('../../db/knex')

async function registerUser (addressUser, token) 
{
    return knex('user').insert({ address: addressUser, token_acess: token })
}

async function insertInventory (address)
{
    return knex('inventory').insert({
        owner: address
    })
}

async function insertScore(address)
{
    return knex('score').insert({
        owner: address
    })
}


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

async function randomString(tamanho) {
    let stringRandom = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringRandom += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringRandom;
}


exports.register = async (req, res) => {
    let userAddres = req.params.address

    let showUserDB        = await showUser(userAddres)
    let stringRandomAcess = await randomString(6)
    
    ///console.log(showUserDB)

    if (showUserDB.length === 0)
    {
        await registerUser(userAddres, stringRandomAcess)

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