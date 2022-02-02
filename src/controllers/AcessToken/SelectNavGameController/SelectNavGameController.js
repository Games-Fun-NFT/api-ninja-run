const knex  = require('../../../db/knex')

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

async function showShipFarm (address, option)
{

    try 
    {
        return knex('nft').select('*').where('owner', address).andWhere('select_farm', option)

    } catch (error) 
    {
        return 'erro'
    }

    
}

exports.select = async (req, res) => {
    let token_acess = req.params.token

    let showUserDB   = await showUser(token_acess)
    let addresUserDB = showUserDB[0]?.address ?? undefined
    

    console.log(addresUserDB)

    if (addresUserDB != undefined) 
    {
        let showShipDB   = await showShipFarm(addresUserDB, 'YES')

        console.log(showUserDB.length)
        console.log(showShipDB)

        let starStatus   = showShipDB[0].star
        let damageStatus = showShipDB[0].damage
        let roundsStatus = showShipDB[0].rounds
        let idStatus     = showShipDB[0].id

        if (showUserDB.length === 1) 
        {
            res.json({
                id: idStatus,
                star: starStatus,
                rounds: roundsStatus,
                damage: damageStatus
            
            })
        }
        else
        {
            res.json({
                message: 'Error NFT'
            })
        }

    }
    else
    {
        res.json({
            message: 'Error Adresss'
        })
    }

    

}