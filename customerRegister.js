let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/users"



// Registering the customer data to mokAPI

async function customerRegister(event) {
    try {

        id = 0;
        event.preventDefault()
        // console.log("hi")
        registerForm = document.getElementById('registerForm')
        customerName = document.getElementById('customerName').value
        customerEmail = document.getElementById('customerEmail').value

        //gender
        var customerGender = document.getElementsByName('gender')
        let genderValue;
        for (var gender of customerGender) {
            if (gender.checked) {
                // alert(gender.value)
                genderValue = gender.value;

            }
        }
        customerPhone = document.getElementById('customerPhone').value
        customerAadhaarPan = document.getElementById('customerAadhaarPan').value
        customerAddress = document.getElementById('customerAddress').value
        customerCity = document.getElementById('customerCity').value
        customerAddPin = document.getElementById('customerAddPin').value
        customerState = document.getElementById('customerState').value
        customerCountry = document.getElementById('customerCountry').value
        customerPassword = document.getElementById('customerPassword').value
        customerConfirmPassword = document.getElementById('customerConfirmPassword').value
        if (customerPassword != customerConfirmPassword) {
            alert("Password not mactch Fill it again")
            return false
        }
        // console.log(customerName)
        // console.log(customerEmail)
        // console.log(customer)
        // console.log(customerEmail)
        // console.log(genderValue)
        // console.log(customerPhone)
        // console.log(customerAadhaarPan)
        // console.log(customerAddress)
        // console.log(customerCity)
        // console.log(customerAddPin)
        // console.log(customerState)
        // console.log(customerCountry)
        id++;

        let newCustomerUser = {
            "name": customerName,
            "email": customerEmail,
            "gender": genderValue,
            "phoneNumber": customerPhone,
            "aadharNo": customerAadhaarPan,
            "address": customerAddress,
            "city": customerCity,
            "pincode": customerAddPin,
            "state": customerState,
            "country": customerCountry,
            "password": customerPassword,
            "confirmPassword": customerConfirmPassword,
            "id": id
        }
        let customerData = await fetch(url, { // along with url we need to pass the data by the folowings
            method: "POST",//type of method to insert
            headers: { "Content-Type": "application/json" },//header type need to know the header
            body: JSON.stringify(newCustomerUser)
        })
        // let res1 = await customerData.json() //to fetch the insert data 
        // console.log(res1)
        alert("Customer registration Sucessfull")
        registerForm.reset()
    }
    catch (err) {
        alert("some techincal Error")
        console.log(err)

    }
}

//display the Resigter data in admin Customer dashboard

async function getCustomerData() {
    try {
        var getCustomerData = await fetch(url)
        var customerData = await getCustomerData.json()
        console.log(customerData)

        var CustomerDetail = customerData.map((element) => {
            console.log(element.id)
            var customerTable = document.getElementById('customer_data')
            var tableBody = document.createElement('tbody')
            var tableRow = document.createElement('tr')
            tableRow.innerHTML = `
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.password}</td>
                <td>${element.gender}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.aadharNo}</td>
                <td>${element.address}</td>
                <td>${element.city}</td>
                <td>${element.pincode}</td>
                <td>${element.state}</td>
                <td>${element.country}</td>
                <td>
                </td>
            `
            tableBody.append(tableRow)
            customerTable.append(tableBody)
        })

    }
    catch (err) {
        console.log(err)
    }


}
getCustomerData()