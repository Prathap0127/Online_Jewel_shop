function loginUser(event){
    event.preventDefault();
    var form=document.getElementById('login')
    var userEmail=document.getElementById('InputUserEmail').value
    var userPassword=document.getElementById('InputUserPassword').value
    console.log(userEmail)
    console.log(userPassword)
    if(userEmail=="user@user.com"&&userPassword=="12345678"){
        window.location="c-dashboard-product.html"
    }
    else if(userEmail=="admin"&&userPassword=="admin123"){
        window.location="admin-dashboard.html"

    }
    else{
        form.reset()
        alert("User name or password is invalid")
    }
}

function bLoginUser(data){
    data.preventDefault();
    var bform=document.getElementById('bLogin')
    var buserEmail=document.getElementById('businesInputEmail').value
    var buserPassword=document.getElementById('businessInputPassword').value
    console.log(buserEmail)
    console.log(buserPassword)
    if(buserEmail=="business@user.com"&&buserPassword=="12345678"){
        window.location="b-dashboard-product-add-product.html"
    }
    else{
        bform.reset()
        alert("User name or password is invalid")
    }
}