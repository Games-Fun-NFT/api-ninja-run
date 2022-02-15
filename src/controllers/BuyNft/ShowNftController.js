const knex  = require('../../db/knex')
const jwt   = require('jsonwebtoken')

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

async function showPrices ()
{

    try 
    {
        return knex('prices').select('*').first()

    } catch (error) 
    {
        return error
    }

    
}

async function showNft (address)
{

    try 
    {
        return knex('nft').select('*').where('owner', address)

    } catch (error) 
    {
        return error
    }

    
}

async function showNftStatus ()
{

    try 
    {
        return knex('nft_status').select('*')

    } catch (error) 
    {
        return error
    }

    
}


async function insertNftUser(addressUser, lifeNft) 
{
    return knex('nft').insert({
        owner:  addressUser, life: lifeNft
    })
}

async function updateBalanceUser(addressUser, balanceAtual)
{
    return knex('user').update({
        balance_usdt: balanceAtual
    }).where('address', addressUser)
}

exports.buy = async (req, res) => 
{

    let userAddresFront = req.params.address
    
    let showUserDB             = await showUser(userAddresFront)
    let pricesNft              = await showPrices()
    let showNftStatusDB        = await showNftStatus()
    let showNftUser            = await showNft(userAddresFront)

    //let balanceUserDB =  showUserDB[0].balance_usdt
    let priceNftDB    =  pricesNft.price_nft
    let lifeStatusNft =  showNftUser[0].life

    if(showUserDB.length > 0 && showNftUser.length === 1)
    {
    

        res.json({
            code: 200,
            life: lifeStatusNft
        })
       
    }
    else 
    {
        res.json({
            code: 400,
            message: 'Nft not exists '
        })
    }

}