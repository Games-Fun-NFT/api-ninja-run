const res = require('express/lib/response')
const knex = require('../../db/knex')


async function selectScore ()
{
    return knex('score').select('*').orderBy('score', 'desc')
}
exports.score = async (req, res) => 
{

    let score = await selectScore()

    console.log(score)

    res.json({score})

}