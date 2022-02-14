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

exports.select = async (req, res) => {
    let token_acess = req.params.token

    let showUserDB   = await showUser(token_acess)
    let addresUserDB = showUserDB[0].address
    

    console.log(addresUserDB)

    if (addresUserDB != undefined) 
    {
        let showShipDB   = await showNft(addresUserDB)
        
        let nftLife      = showShipDB[0].life
        

        if (showUserDB.length === 1) 
        {
            if (showShipDB.length === 1) {
                res.json({
                    code: 150,
                    life: nftLife
                })
            }
            else
            {
                res.json({
                    code: 250
                })
            }
            
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
            message: 'Error Address'
        })
    }

    

}