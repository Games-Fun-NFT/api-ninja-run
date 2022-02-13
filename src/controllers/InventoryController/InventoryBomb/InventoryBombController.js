const knex = require('../../../db/knex')

async function selectPlayer (token)
{
    return knex('user').select('*').where('token_acess', token)
}

async function selectBomb (address)
{
        return knex('inventory').select('bombs').where('owner', address).first()
}

exports.bomb = async (req, res) => 
{
    let tokenGame       = req.params.token

    let userDB          = await selectPlayer(tokenGame)

    let addressUserDB   = userDB[0]?.address ?? undefined

    

    if (addressUserDB != undefined) 
    {
        let BombInventoryDB = await selectBomb(addressUserDB) 
        let bombAmountDB    = BombInventoryDB.bombs
        
        res.json({
        amount: bombAmountDB
        })
    }
    else
    {
        res.json({
            code: 320
        })
    }


    
}