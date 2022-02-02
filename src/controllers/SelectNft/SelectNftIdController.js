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

async function selectNFT(id) 
{
    return knex('nft').select('*').where('id', id).first()
}

exports.selectId = async (req , res) => 
{
    let idFront = req.params.id

    let SelectNftId = await selectNFT(idFront)

    //console.log(SelectNftId)

    res.json({
        SelectNftId
    })
}