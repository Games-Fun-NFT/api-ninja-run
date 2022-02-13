const knex = require('../../db/knex')


async function showUser (address)
{
    return knex('user').select('*').where('address', address)
}

async function showPrices()
{
    return knex('prices').select('*').first()
}

async function showInventory(address)
{
    return knex('inventory').select('*').where('owner', address)
}

async function updateTicket(address, amount)
{
    return knex('inventory').update({
        ticktes: amount
    }).where('owner', address)
}

async function updateBomb(address, amount)
{
    return knex('inventory').update({
        bombs: amount
    }).where('owner', address)
}

async function updateBalanceUser (address, newBalance) 
{
    return knex('user').update({ 
        balance_token: newBalance
     }).where('address', address)
}

exports.shop = async (req, res) => {
    let resultsShop = req.params

    console.log(resultsShop.item)

    let addressUserFront = req.params.address
    let itemUserFront    = req.params.item

    let showUserDB      = await showUser(addressUserFront) 
    let showPricesDB    = await showPrices()
    let showInventoryDB = await showInventory(addressUserFront)

    // prices

    let priceTicket_20 = showPricesDB.ticket_20
    let priceTicket_60 = showPricesDB.ticket_60

    let priceBomb      = showPricesDB.bomb

    let balanceUserDB  = showUserDB[0].balance_token


    let amountTicktesInventory = showInventoryDB[0].ticktes
    let amountBombInventory    = showInventoryDB[0].bombs

    console.log(amountBombInventory)
    if (showInventoryDB.length === 1) 
    {

        if (balanceUserDB >= 20) 
        {
            if (itemUserFront === 'ticket20') 
            {
        
                balanceUserDB = balanceUserDB - priceTicket_20
    
                await updateBalanceUser(addressUserFront, balanceUserDB)

                amountTicktesInventory = amountTicktesInventory + 20
                await updateTicket(addressUserFront, amountTicktesInventory)

                res.json({
                    Messager: 'buy 20 ticket'
                })
            }
            else if (itemUserFront === 'ticket60')
            {
        
                balanceUserDB = balanceUserDB - priceTicket_60
    
                await updateBalanceUser(addressUserFront, balanceUserDB)

                console.log(balanceUserDB)

                amountTicktesInventory = amountTicktesInventory + 60
                await updateTicket(addressUserFront, amountTicktesInventory)

                res.json({
                    Messager: 'buy 60 ticket'
                })
            
            }
            else if (itemUserFront = 'bomb') 
            {
                balanceUserDB = balanceUserDB - priceBomb
    
                await updateBalanceUser(addressUserFront, balanceUserDB)

                console.log(balanceUserDB)

                amountBombInventory = amountBombInventory + 20
                await updateBomb(addressUserFront, amountBombInventory)

                res.json({
                    Messager: 'buy 20 Bomb'
                })
            }

        }
        else 
        {
            res.json({
                message: 'Balance Small'
            })
        }
        
    }

}