const serverUrl = "https://mmwi2xjec6ny.usemoralis.com:2053/server";
const appId = "paEtRjurIT8dDOA3FvpVGRSIlyPRHgK7eB9gqRgD";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

async function login() {
    if (!user) 
    {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) 
        {
          registerLogin(user.get("ethAddress"))
        })
        .catch(function (error) 
        {
          console.log(error);
        });
    }
    else 
    {
        await showUser ()
        console.log(user.get("ethAddress"))
    }
}

async function registerLogin(user) {
    let sendLogin = await fetch('http://localhost:3000/register' + '/' + user)

    let response  = await sendLogin.json()

    console.log(response)

    if (response.message === 1) {
        window.location.reload()
    }
}

async function showUser () {
    let reciveLogin = await fetch('http://localhost:3000/user' + '/' +user.get("ethAddress"))

    let dataLogin   = await reciveLogin.json()

    let addressFront = document.getElementById('address')
    let balanceFront = document.getElementById('balance')

    addressFront.innerHTML = dataLogin.showUserDB[0].address
    balanceFront.innerHTML = dataLogin.showUserDB[0].balance_token

    document.getElementById('connect').style.display = 'none';
    document.getElementById('logout').style.display = 'inline';


}

async function logOut() {
  await Moralis.User.logOut();
  window.location.reload()
}

login()

document.getElementById('logout').style.display = 'none';
document.getElementById("connect").onclick = login
document.getElementById("logout").onclick = logOut