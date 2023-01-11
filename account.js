
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/users/"

let userid = sessionStorage.getItem('userId')
console.log(userid)
var profileForm = document.getElementById('profileForm')

async function displayCustomerDetail(id){
    var customerName = document.getElementById('customerName')
    var customerEmail = document.getElementById('customerEmail')
    var customerGender = document.getElementById('gender')
    var customerPhone = document.getElementById('customerPhone')
        var customerAadhaar = document.getElementById('customerAadhaar')
        let customerAddress = document.getElementById('customerAddress')
        let customerCity = document.getElementById('customerCity')
        let customerAddPin = document.getElementById('customerAddPin')
        let customerState = document.getElementById('customerState')
        let customerCountry = document.getElementById('customerCountry')
    let res = await fetch(url+id)
    let data = await res.json()
    console.log(data.name)
    customerName.value = data.name
    customerEmail.value = data.email
    customerGender.value = data.gender
    customerPhone.value = data.phoneNumber
    customerAadhaar.value=data.aadhaarNo
    customerAddress.value = data.address
    customerCity.value = data.city
    customerAddPin.value = data.pincode
    customerState.value = data.state
    customerCountry.value = data.country




    console.log("account")

}

async function updateCustomerDetail(id){
    console.log(id)
    let updateData = {
        phoneNumber:  customerPhone.value,
        aadhaarNo: customerAadhaar.value,
        "address": customerAddress.value,
        "city": customerCity.value,
        "pincode": customerAddPin.value,
        "state": customerState.value,
        "country":customerCountry.value,
    }
    let Update = await fetch(url+id, {
        method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData)})
    let res = await Update.json()
    alert("Profile Updated")
    console.log(res)

}

displayCustomerDetail(userid)