let burl = "https://6350def9dfe45bbd55b0529b.mockapi.io/shop-user/"

async function bRegister(event) {
    event.preventDefault()
    try {

        console.log("hi")
        var registerForm = document.getElementById('b_registerForm')
        var shopName = document.getElementById('shopName').value
        var shopEmail = document.getElementById('shopEmail').value


        var shopPhone = document.getElementById('shopPhone').value
        var shopGST = document.getElementById('inputGST').value

        //aadhar verification
        var gstExp = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
        if (gstExp.test(shopGST)) {
            console.log('valid GST number')
            // GST Number will be of 15 digits having below validations:

            // a.First two positions will be numeric
            // b.Third to Sixth positions will be Alphabets
            // c.Seventh position will be either alphabet or numeric
            // d.Eighth to Eleventh positions will be numeric
            // e.Twelfth position will be an alphabet
            // f.Thirteenth to Fifteenth positions will be alphanumeric
        }
        else {
            alert('invalid GST number')
            return false
        }

        var shopAddress = document.getElementById('shopAddress').value
        var shopCity = document.getElementById('shopCity').value
        var shopPin = document.getElementById('shopPin').value
        var shopState = document.getElementById('shopState').value
        var shopCountry = document.getElementById('shopCountry').value
        var shopPassword = document.getElementById('shopPassword').value
        var shopConfirmPassword = document.getElementById('shopConfirmPassword').value
        if (shopPassword != shopConfirmPassword) {
            alert("Password not mactch Fill it again")
            return false
        }
        var shopDescription = document.getElementById('description').value
     

        let newShopUser = {
            shopName,
           shopEmail,
           shopPhone,
           shopGST,
            shopAddress,
            shopCity,
            shopPin,
            shopState,
            shopCountry,
            shopPassword,
            shopDescription
        }
        let customerData = await fetch(burl, { // along with url we need to pass the data by the folowings
            method: "POST",//type of method to insert
            headers: { "Content-Type": "application/json" },//header type need to know the header
            body: JSON.stringify(newShopUser)
        })
        // let res1 = await customerData.json() //to fetch the insert data 
        // console.log(res1)
        alert("shop registration Sucessfull")
        registerForm.reset()
        window.location = "business_login.html"
    }
    catch (err) {
        alert("some techincal Error")
        console.log(err)

    }

}