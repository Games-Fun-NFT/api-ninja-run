const knex = require('../../db/knex')
const timers  = require('promise-timers');
const Moralis = require('moralis/node');
const delay = 10000

const serverUrl    = "https://cpovkemuvrve.usemoralis.com:2053/server"
const appId        = "KgXX7vY0zeT0HYeQSo5KgQCQesReOWkgnoJAWJq3"
const masterKey    = 'L5mVxAFFWAri5gh4TEsKPFAKy2RXxRAXokaHDPyR'

Moralis.start({ serverUrl, appId, masterKey});

async function dataNow() {

    let date_ob = new Date();

    let date = date_ob.getUTCDate()

// current month
    let month = date_ob.getUTCMonth()+1

// current year
    let year = date_ob.getUTCFullYear()

// current hours
    let hours = date_ob.getUTCHours()

// current minutes
    let minutes = date_ob.getMinutes()

    let minutesFormat = minutes < 10 ? '0' + minutes : minutes 
// current seconds
    let seconds = date_ob.getUTCSeconds()

    let mes_formart = date_ob.getUTCMonth()+1 < 10 ? '0' + month : month

    let hours_formart = date_ob.getUTCHours() < 10 ? '0' + hours : hours

    let dataNow = year + "-" + mes_formart + "-" + date + 'T' + hours_formart + ':' + minutesFormat

    return dataNow
}

async function updateBalance(infoUser, infoBalance) {
    return knex('user').update( { balance_usdt: infoBalance } ).where( { address: infoUser } )
}

async function updateTnxHash(infoUser, tnxHash) {
    return knex('user').update({ tnx_hash_usdt: tnxHash }).where( { address: infoUser } )
}

async function selectBalance(info) {
    return await knex('user').select('*').where('address', info).first()
}

async function selectTnxHash (address, hash) {
    return knex('tnx_hash').select('*').where('owner', address).andWhere('hash', hash)

}

async function insertHash (address, hash, createdAtFront, token_amount)
{
    return knex('tnx_hash').insert({
        owner: address,
        amount_token: token_amount,
        hash: hash,
        createdAt: createdAtFront
    })
}

exports.deposit = async (req, res) => {
    let info = req.body

    let userAddress      = info.user
    let userTnxHash      = info.tnxHash
    let userBalanceFront = parseInt(info.balance) 
    
    console.log(userAddress)
    
    let selectBalanceResult = await selectBalance(userAddress).catch((err) => console.log('Address undefined'))
    let currentBalanceUser  = parseInt(selectBalanceResult?.balance_usdt ?? null)
    

    let currentTnxHash      = selectBalanceResult?.tnx_hash_usdt ?? ''

    let dataBackEnd         = await dataNow()

    console.log(currentBalanceUser)

    console.log(dataBackEnd)

    console.log(userTnxHash)

        setTimeout(async () => {
            const options = {
                chain: "bsc",
                transaction_hash: userTnxHash
              };
              const transaction = await Moralis.Web3API.native.getTransaction(options);
    
              console.log(transaction)
              console.log(transaction.block_timestamp)
              console.log(transaction.block_timestamp.substring(0, 16))
              console.log(transaction.block_timestamp.substring(0, 16) === dataBackEnd)
              console.log(dataBackEnd)
    
            //   if (MoralisResultsDB.length === 0) 
            //     {
            //         res.json({
            //         message: 'ERROR 302'
            //         })
            //     }
                if(currentTnxHash != userTnxHash && transaction.block_timestamp.substring(0, 16) === dataBackEnd)
                {
                    await insertHash(userAddress, userTnxHash, transaction.block_timestamp.substring(0, 16), userBalanceFront)
                    await updateTnxHash(userAddress, userTnxHash)
    
                    let updateCurrentUserBalance = currentBalanceUser + userBalanceFront
        
                //     timers.setTimeout(5000).then(async ()=> {
                   
                // })
                let updateDB = await updateBalance(userAddress, updateCurrentUserBalance)
                const info = await selectBalance(userAddress)
                
                // userData.then((info) => {
                return res.json({
                    info
                })
                //     timers.setTimeout(delay).then(()=> {
                   
                //  })
            // })
            
                }
                else 
                {
                    return res.json({
                    message: 'ERROR 404'
                    })
                }
        },120000)
       
       return res.json ({
            message: "Wait 2 minutes"
        })
       //   })
      

    // const pipeline = [
    //     { match: { hash: userTnxHash } }
    //   ];
      
    //   const query = new Moralis.Query("BscTransactions");
      
    //   timers.setTimeout(40000).then(async () => {
        // query.aggregate(pipeline).then(async function(MoralisResultsDB)
        //{

        //     console.log(currentTnxHash != userTnxHash)

        //     console.log(MoralisResultsDB[0].createdAt.substring(0, 16) === dataBackEnd)
        //     console.log(MoralisResultsDB[0].createdAt.substring(0, 16))
        //     console.log(dataBackEnd)

        //     if (MoralisResultsDB.length === 0) 
        //     {
        //         res.json({
        //         message: 'ERROR 302'
        //         })
        //     }
        //     else if(currentTnxHash != userTnxHash && MoralisResultsDB[0].createdAt.substring(0, 16) === dataBackEnd)
        //     {
        //         await updateTnxHash(userAddress, userTnxHash)

        //         let updateCurrentUserBalance = currentBalanceUser + userBalanceFront
    
        //         timers.setTimeout(5000).then(async ()=> {
        //         let updateDB = await updateBalance(userAddress, updateCurrentUserBalance)
        //     })

        //         timers.setTimeout(delay).then(()=> {
        //         const userData = selectBalance(userAddress)
        //         userData.then((info) => {
        //         res.json({
        //             info
        //         })
        //      })
        // })
        
        //     }
        //     else 
        //     {
        //         res.json({
        //         message: 'ERROR 404'
        //         })
        //     }
        //   })
        //   .catch(function(err){
        //       console.log(err)
        //   })
      //})


    
}