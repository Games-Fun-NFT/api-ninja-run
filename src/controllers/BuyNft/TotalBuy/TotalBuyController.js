const knex  = require('../../../db/knex')

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

async function showNft (address)
{

    try 
    {
        return knex('nft').select('*')

    } catch (error) 
    {
        return error
    }

    
}

exports.total = async (req, res) => 
{

    let showNftUser            = await showNft()



    console.log(showNftUser.length)

    res.json({
        total: showNftUser.length
    })
}