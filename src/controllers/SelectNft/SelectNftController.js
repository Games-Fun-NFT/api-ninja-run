const res = require('express/lib/response')
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

async function selectNFTStar(address, starName) 
{
    return knex('nft').select('*').where('owner', address).andWhere('star', starName)
}

exports.select = async (req , res) => 
{
    let addressFront = req.params.address

    let resultsNftUserOne      = await selectNFTStar(addressFront, 'one').catch((err) => console.log('erro 1 estrelas'))
    let resultsNftUserTwo      = await selectNFTStar(addressFront, 'two').catch((err) => console.log('erro 2 estrelas'))
    let resultsNftUserThree    = await selectNFTStar(addressFront, 'three').catch((err) => console.log('erro 3 estrelas'))
    let resultsNftUserFour     = await selectNFTStar(addressFront, 'four').catch((err) => console.log('erro 4 estrelas'))


    res.status(200).json({
        resultsNftUserOne, resultsNftUserTwo, resultsNftUserThree, resultsNftUserFour
    })
}