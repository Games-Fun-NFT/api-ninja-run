const knex = require('../../../db/knex')

async function selectPlayer (token)
{
    return knex('user').select('*').where('token_acess', token)
}


async function updateBalanceUser (address, newBalance)
{
    return knex('user').update({
        balance_token: newBalance
    }).where('address', address)
}


exports.rewards = async (req, res) => 
{
    let scoreGame = req.params.score
    let tokenGame = req.params.token

    let userDB = await selectPlayer(tokenGame)

    let addressUserDB = userDB[0].address
    let balanceUserDB = userDB[0].balance_token

    console.log(balanceUserDB)

    if (scoreGame >= 10 && scoreGame <= 349) 
    {
         balanceUserDB = balanceUserDB + 10

         await updateBalanceUser(addressUserDB, balanceUserDB)

         res.json({
            rewardsToken: 10
        })
    }
    else if (scoreGame >= 350 && scoreGame <= 499) 
    {
        balanceUserDB = balanceUserDB + 20

        await updateBalanceUser(addressUserDB, balanceUserDB)

        res.json({
            rewardsToken: 20
        })
    }
    else if (scoreGame >= 500) 
    {
        balanceUserDB = balanceUserDB + 50

        await updateBalanceUser(addressUserDB, balanceUserDB)

        res.json({
            rewardsToken: 50
        })
    }
    else if (scoreGame <= 199) 
    {
        res.json({
            rewardsToken: 0
        })
    }
    else
    {
        res.json({
            error: 'Error Score'
        })
    }
}