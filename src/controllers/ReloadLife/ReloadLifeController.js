const knex = require('../../db/knex')

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

async function updateBalanceUser(addressUser, balanceAtual)
{
    return knex('user').update({
        balance_usdt: balanceAtual
    }).where('address', addressUser)
}

async function updateLifeUser(address, lifenft)
{
    return knex('nft').update({
        life: lifenft
    }).where('owner', address)
}

exports.reload = async (req, res) => 
{

    let userAddresFront = req.params.address
    
    let showUserDB             = await showUser(userAddresFront)
    let pricesNft              = await showPrices()
    let showNftUser            = await showNft(userAddresFront)

    console.log(pricesNft, showNftUser, showUserDB)

    let priceReloadLife        = pricesNft.renew_life
    let nowLifeNft             = showNftUser[0].life
    let balanceUserDB          = showUserDB[0].balance_usdt

    console.log(priceReloadLife, nowLifeNft)

    if(showUserDB.length > 0 && showNftUser.length === 1)
    {
       if (balanceUserDB >= priceReloadLife) 
       {

        if (nowLifeNft === 0) 
        {

        balanceUserDB = balanceUserDB - priceReloadLife 

        await updateBalanceUser(userAddresFront, balanceUserDB)

        await updateLifeUser(userAddresFront, 5)

        res.json({
            life: 5
        })

        }
        else
        {
            res.json({
                message: 'can not renew'
            })
        }
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
            message: 'User Not Exist '
        })
    }

}