let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/users/"
let burl = "https://6350def9dfe45bbd55b0529b.mockapi.io/shop-user/"

var userEmail = document.getElementById('InputUserEmail')
var userPassword = document.getElementById('InputUserPassword')



async function datalogin(event) {
    event.preventDefault()
    try {

        var data = await fetch(url)
        var userlist = await data.json()
        let login=userlist.filter((e)=>{
            return (userEmail.value === e.email && userPassword.value === e.password) 
        })
        if (login.length===1){
            alert(`Login Sucessful welcome to Jewel Shop`)
            window.location = "customer-dashboard.html"
            sessionStorage.setItem('username',login[0].name)
            sessionStorage.setItem('userId',login[0].id)
        }
        else{
            alert("invalid email or Password")
        }
    }
    catch (err) {

        console.log(err)
    }

}

// datalogin()

// bLoginUser

let bemail = document.getElementById("businesInputEmail")
let bpassword = document.getElementById("businessInputPassword")
async function bLoginUser(event){
event.preventDefault()
    try {

        var data = await fetch(burl)
        var userlist = await data.json()
        let login=userlist.filter((e)=>{
            return (bemail.value === e.shopEmail && bpassword.value === e.shopPassword) 
        })
        if (login.length===1){
            alert(`welcome to Jewel Shop`)
            window.location = "admin-dash-board.html"
            sessionStorage.setItem('username',login[0].shopName)
            sessionStorage.setItem('userId',login[0].id)

        }
        else{
            alert("invalid email or Password")
        }
    }
    catch(err){
        console.log(err)
    }
}
