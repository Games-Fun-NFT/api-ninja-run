const knex = require('../../../db/knex')

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


async function showRewards ()
{

    try 
    {
        return knex('rewards').select('*').first()

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

async function updateNFTUser(addressUser, lifeNft)
{
    return knex('nft').update({
        life: lifeNft
    }).where('owner', addressUser)
}


exports.win = async (req, res) => 
{
    let tokenGame = req.params.token

    let userDB        = await showUser(tokenGame)
    let showRewardsDB = await showRewards()

    console.log(userDB.length)

    let userbalance   = userDB[0].balance_usdt
    let userAddressDB = userDB[0].address

    let rewardsGame = showRewardsDB.rewards_token
    console.log()

    if (userDB.length === 1) 
    {
        userbalance = userbalance + rewardsGame
        
        await updateBalanceUser(userAddressDB, userbalance)

        await updateNFTUser(userAddressDB, 0)

        res.status(200).send('ok')
    }
    else
    {
        res.status(400).send('401')
    }
}