// sessionStorage.setItem('username')
let orderUrl = "https://6350def9dfe45bbd55b0529b.mockapi.io/cart"

let orderlen = document.getElementById('orderLen')


let username = document.getElementById('user')


username.innerText = sessionStorage.getItem('username')

function logout() {
    console.log("logout")
    sessionStorage.clear()
    sessionStorage.setItem('username',"null")
    window.location = "index.html"

}

function onloadPage() {
    console.log("onload")
    if (sessionStorage.getItem('username') === "null") {
        alert("Your Session has expired");
        window.location = "index.html";
    }
}

setInterval(onloadPage(), 500);

async function order(){
    try{

        let res = await fetch(orderUrl)
        let data = await res.json()
        // console.log(data.length)
        orderlen.innerText=data.length
    }
    catch(err){
        console.log(err)
    }

}

order()

