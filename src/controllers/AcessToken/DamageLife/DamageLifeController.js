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

async function showNft (address)
{

    try 
    {
        return knex('nft').select('*').where('owner', address)

    } catch (error) 
    {
        return 'erro'
    }

    
}

async function updateNFTUser(addressUser, lifeNft)
{
    return knex('nft').update({
        life: lifeNft
    }).where('owner', addressUser)
}

exports.damage = async (req, res) => 
{
    let tokenGame = req.params.token

    let userDB        = await showUser(tokenGame)
   
    console.log(userDB.length)

    let userbalance   = userDB[0].balance_usdt
    let userAddressDB = userDB[0].address

    let showNFTDB     = await showNft(userAddressDB)

   

    if (userDB.length === 1) {
        console.log(showNFTDB.length)

        if (showNFTDB.length === 1) {
            let lifeNow = showNFTDB[0].life

            if (lifeNow >= 1) {
                lifeNow = lifeNow - 1

                await updateNFTUser(userAddressDB, lifeNow)

                res.json({
                    life: lifeNow
                })
            }
            else
            {
                res.json({
                    life: 0
                })
            }
        }
    }
    else
    {
        res.json({
            message: 'User Not Exist'
        })
    }
}