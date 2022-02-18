const knex  = require('../../db/knex')

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

async function updateBalanceTokenUser(addressUser, balanceAtual)
{
    return knex('user').update({
        balance_token: balanceAtual
    }).where('address', addressUser)
}

exports.buy = async (req, res) => 
{

    let userAddresFront = req.params.address
    
    let showUserDB             = await showUser(userAddresFront)
    let pricesNft              = await showPrices()
    let showNftStatusDB        = await showNftStatus()
    let showNftUser            = await showNft(userAddresFront)

    //console.log(showUserDB)
    //console.log(showNftStatusDB)
    //console.log(pricesNft)

    
    let priceNftDB    = pricesNft.price_nft
    let lifeStatusNft = showNftStatusDB[0].life

    //console.log(balanceUserDB)

    console.log(showNftUser.length)


    if(showUserDB.length > 0 && showNftUser.length === 0)
    {
        let balanceUserDB = showUserDB[0].balance_usdt

       if (balanceUserDB >= priceNftDB) 
       {
        balanceUserDB = balanceUserDB - priceNftDB 

        await updateBalanceUser(userAddresFront, balanceUserDB)
        await updateBalanceTokenUser(userAddresFront, 40)
        await insertNftUser(userAddresFront, lifeStatusNft)

        res.json({
            code: 200,
            life: lifeStatusNft,
        })
       }
       else 
       {
           res.json({
               message: 'Balance is small'
           })
       }
    }
    else 
    {
        res.json({
            code: 200,
            message: 'Nft already exists '
        })
    }

}