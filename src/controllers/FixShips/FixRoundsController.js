const knex  = require('../../db/knex')

async function showUser (addressUser)
{

    try 
    {
        return knex('user').select('*').where('address', addressUser)

    } catch (error) 
    {
        return error
    }

    
}

async function selectNFT(id) 
{
    return knex('nft').select('*').where('id', id).first()
}

async function showNftStatus (starname)
{

    try 
    {
        return knex('nft_status').select('*').where('star', starname)

    } catch (error) 
    {
        return error
    }

    
}

async function updateRounds(id, rounds)
{
    return knex('nft').update({
        rounds: rounds
    }).where('id', id)
}

async function updateRoundsRenew(id, renew)
{
    return knex('nft').update({
        hour_fix_rounds_now: renew
    }).where('id', id)
}

//  0 = não pode renovar, 1 = pode renovar

exports.fixRounds = async (req , res) => 
{
    let idFront = req.params.id

    let SelectNftId = await selectNFT(idFront)

    let today = new Date();
    let hours = today.getUTCHours();

    let renew    = SelectNftId.hour_fix_rounds_now
    let starShip = SelectNftId.star
    console.log(renew)

    let StatusNft = await showNftStatus(starShip)

    console.log(StatusNft)

    if (SelectNftId.rounds === 0) {
       if (hours === 21) {
           console.log('ta na hora')
            switch (starShip) {
                case 'one':
                    console.log('one')
                    break;
                case 'two':
                    console.log('two')
                    break;
                case 'three':
                    console.log('three')
                    break;
                case 'four':
                    console.log('four')
                    break;
                default:
                    break;
            }
       }
    }

    res.json({
        hours
    })
}