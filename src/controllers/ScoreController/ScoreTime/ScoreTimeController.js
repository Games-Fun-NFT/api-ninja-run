const knex = require('../../../db/knex')


async function scoreConfig () 
{
    return knex('score_config').select('*').first()
}

async function scoreUpdateConfig (time_init) 
{
    return knex('score_config').update({
        time_init: time_init
    })
}

exports.time = async (req, res) => 
{
    let scoreConfigDB = await scoreConfig()
    let time_initDB   = scoreConfigDB.time_init

    let data = new Date()

    let hours = data.getUTCHours()
    let min   = data.getUTCMinutes()

    if (hours === 23 && min == 59) 
    {
        time_initDB = time_initDB + 1

        await scoreUpdateConfig(time_initDB)
        // up para muda no front end
        res.json({
            message: 'UP'
        })
    }
    else if (time_initDB === 7) 
    {

        await scoreUpdateConfig(1)

        res.json({
            message: 'Season End',
            code: 'DOWN'
        })
    }
    else
    {
        res.json({
            Erro: 'Season Error'
        })
    }

    console.log(
        hours, min
    )
}