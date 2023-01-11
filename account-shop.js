
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/shop-user/"

let userid = sessionStorage.getItem('userId')
console.log(userid)
var profileForm = document.getElementById('bprofileForm')
var shopName = document.getElementById('shopName')
var shopEmail = document.getElementById('shopEmail')
var shopPhone = document.getElementById('shopPhone')
var shopGst = document.getElementById('inputGST')
var shopAddress = document.getElementById('shopAddress')
var shopCity = document.getElementById('shopCity')
var shopAddPin = document.getElementById('shopPin')
var shopState = document.getElementById('shopState')
var shopCountry = document.getElementById('shopCountry')
var shopDesc = document.getElementById('shopDescription')

async function displayShopDetail(id) {
    try {
        let res = await fetch(url + id)
        let data = await res.json()
        console.log(data.shopName)
        shopName.value = data.shopName
        shopEmail.value = data.shopEmail
        shopPhone.value = data.shopPhone
        shopGst.value = data.shopGST
        shopAddress.value = data.shopAddress
        shopCity.value = data.shopCity
        shopAddPin.value = data.shopPin
        shopState.value = data.shopState
        shopCountry.value = data.shopCountry
        shopDesc.value = data.shopDescription
    }
    catch (err) {
        console.log(err)
    }

}

async function updateShopDetail(id) {
    try {
        console.log(id)

        let updateData = {
            shopName: shopName.value,
            shopPhone: shopPhone.value,
            shopAddress: shopAddress.value,
            shopCity: shopCity.value,
            shopPin: shopAddPin.value,
            shopState: shopState.value,
            shopCountry: shopCountry.value,
            shopDescription: shopDesc.value


        }
        let Update = await fetch(url + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData)
        })
        let res = await Update.json()
        alert("Profile Updated")
        console.log(res)
    } catch (err) {
        console.log(err)
    }

}

displayShopDetail(userid)