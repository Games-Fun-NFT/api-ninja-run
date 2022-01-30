const appId = "paEtRjurIT8dDOA3FvpVGRSIlyPRHgK7eB9gqRgD";
const serverUrl = "https://mmwi2xjec6ny.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

async function selectNft (star, img_nft)
{
    for (let index = 0; index < star.length; index++) {
        const nft = star[index];

        let selectNftFront = document.getElementById('selectNft')

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

}

window.onload = async () => await getNft()