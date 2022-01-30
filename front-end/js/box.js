const serverUrl = "https://mmwi2xjec6ny.usemoralis.com:2053/server";
const appId = "paEtRjurIT8dDOA3FvpVGRSIlyPRHgK7eB9gqRgD";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

console.log(user.get("ethAddress"))

async function buyBoxOne() 
{
    let buyBox = await fetch('http://localhost:3000/onebuy' + '/' + user.get("ethAddress"))

    let response = await buyBox.json()

    console.log(response)

    if (response.rare === 'one') 
    {
        let cardDiv = document.querySelector('.card-win')

        cardDiv.style.display = 'inline'

        let id_nft = document.getElementById('id-nft')
        id_nft.innerHTML = 'ID: ' + response.id

        let rounds_nft = document.getElementById('rounds-nft')
        rounds_nft.innerHTML = 'Rounds: ' + response.rounds

        let lifetime = document.getElementById('lifetime')
        lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }
    else if (response.rare === 'two')
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
        }
    else if (response.rare === 'three') 
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }
}

async function buyBoxTwo() 
{
    let buyBox = await fetch('http://localhost:3000/twobuy' + '/' + user.get("ethAddress"))

    let response = await buyBox.json()

    console.log(response)

    if (response.rare === 'one') 
    {
        let cardDiv = document.querySelector('.card-win')

        cardDiv.style.display = 'inline'

        let id_nft = document.getElementById('id-nft')
        id_nft.innerHTML = 'ID: ' + response.id

        let rounds_nft = document.getElementById('rounds-nft')
        rounds_nft.innerHTML = 'Rounds: ' + response.rounds

        let lifetime = document.getElementById('lifetime')
        lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }
    else if (response.rare === 'two')
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
        }
    else if (response.rare === 'three') 
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }

    else if (response.rare === 'four') 
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }
    
}

async function buyBoxThree() 
{

    let buyBox = await fetch('http://localhost:3000/threebuy' + '/' + user.get("ethAddress"))

    let response = await buyBox.json()

    console.log(response)

    if (response.rare === 'one') 
    {
        let cardDiv = document.querySelector('.card-win')

        cardDiv.style.display = 'inline'

        let id_nft = document.getElementById('id-nft')
        id_nft.innerHTML = 'ID: ' + response.id

        let rounds_nft = document.getElementById('rounds-nft')
        rounds_nft.innerHTML = 'Rounds: ' + response.rounds

        let lifetime = document.getElementById('lifetime')
        lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }
    else if (response.rare === 'two')
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
        }
    else if (response.rare === 'three') 
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }

    else if (response.rare === 'four') 
    {
            let cardDiv = document.querySelector('.card-win')
    
            cardDiv.style.display = 'inline'
    
            let id_nft = document.getElementById('id-nft')
            id_nft.innerHTML = 'ID: ' + response.id
    
            let rounds_nft = document.getElementById('rounds-nft')
            rounds_nft.innerHTML = 'Rounds: ' + response.rounds
    
            let lifetime = document.getElementById('lifetime')
            lifetime.innerHTML = 'Lifetime ' + response.lifetime
    }
}

document.getElementById("buy-nft-one").onclick = buyBoxOne
document.getElementById('buy-nft-two').onclick = buyBoxTwo
document.getElementById('buy-nft-three').onclick = buyBoxThree
