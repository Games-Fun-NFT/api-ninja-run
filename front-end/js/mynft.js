const appId = "paEtRjurIT8dDOA3FvpVGRSIlyPRHgK7eB9gqRgD";
const serverUrl = "https://mmwi2xjec6ny.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });

let user                = Moralis.User.current();
let selectNftFront      = document.getElementById('selectNft')

async function selectNft (star, img_nft)
{
    for (let index = 0; index < star.length; index++) {
        const nft = star[index];


        console.log(nft)
        selectNftFront.options[selectNftFront.options.length] = new Option(`Id: ${nft.id} Rounds: ${nft.rounds}, Star: ${nft.star}`, `${nft.id}`)
    
        
    }
}

async function getNft ()
{

    const response = await fetch('http://localhost:3000/show/' + user.get("ethAddress"))

    let data = await response.json()

    await selectNft(data.resultsNftUserOne, '*')
    await selectNft(data.resultsNftUserTwo, '**')
    await selectNft(data.resultsNftUserThree, '***')
    await selectNft(data.resultsNftUserFour, '****')

    selectIdNft()

}

async function selectIdNft ()
{
    let valueI = selectNftFront.options[selectNftFront.selectedIndex]

    console.log(valueI.value)

    let selectId = await fetch('http://localhost:3000/selectid/' + valueI.value)

    let response = await selectId.json()

    console.log(response.SelectNftId)

    let cardNft   = document.querySelector('.cardNft')
    let idNft     = document.getElementById('id')
    let roundsNft = document.getElementById('rounds')
    let damageNft = document.getElementById('damage')
    cardNft.style.display = 'inline'

    idNft.innerHTML = 'ID ' + response.SelectNftId.id
    roundsNft.innerHTML = `Rounds: ${response.SelectNftId.rounds}`
    damageNft.innerHTML = `Damage: ${response.SelectNftId.damage}`
}



window.onload = async () => await getNft()