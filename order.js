console.log("Cart")
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/cart/"



async function displayOrder() {
    try {
        let res = await fetch(url)
        let orderData = await res.json()
        console.log(orderData)
        orderData.map((e) => {
            // console.log(e)
            // let price = (e.productPrice)
            // console.log(price)
            // var qty = document.getElementById("qty").value
            // console.log(qty)
            // var pprice = qty*price

            var orderdiv = document.getElementById("orders")
            var total = document.getElementById("TotalPrice")
            var newOrder = document.createElement("div")
            newOrder.classList.add("card", "text-center", "m-3")
            newOrder.style.width = "12rem"
            newOrder.innerHTML = `
            <img src="${e.productImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title">${e.productName}</p>
                    <div class="d-flex justify-content-between">
                    <p class="card-text">Rs.${(e.productPrice)}</p>
                    <p class="card-text float-right"><small class="text-muted"><s>Rs.${e.productActualPrice}</s>
                            </small></p>
                    </div>
                    <p class="order">Status: ${e.deliveryStatus}<p>

                    <div class="d-flex justify-content-around">
                    <input type="number" min="1" max="5" value=${e.productQty} size="1" id="qty${e.id}">

                    
                    <buttom class="btn btn-outline-warning" onclick="removeOrder(${e.id})"><i class="fa fa-trash" aria-hidden="true"></i></buttom> <br>
                    <buttom class="btn btn-outline-warning" onclick="checkout(${e.id})"><i class="fa fa-shopping-cart" aria-hidden="true"></i></buttom> <br>
               </div> 
                    </div>

            `

            orderdiv.append(newOrder)
            console.log()

        })

    }
    catch (err) {
        console.log(err)
    }
}


displayOrder()

async function removeOrder(id) {
    try {
        let userResponse = confirm("Are you Sure cancel the order")
        console.log(userResponse)
        if (userResponse === true) {
            let res = await fetch(url + id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },


            })
            alert("Product removed from orders")
            location.reload()
        }
        else {
            return false
        }

    }
    catch (err) {
        console.log(err)
    }
}

async function checkout(id) {
    let cart= await fetch(url+id)
    let chkdata = await cart.json()
    
    console.log(id)
    let confirmOrder = {
        deliveryStatus: "confirmed"
    }
    chkdata.filter((e)=>{
        if(e.deliveryStatus===confirmOrder.deliveryStatus)
        {
            alert("Product Confirmed already")
        }
    })
    let res = await fetch(url + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(confirmOrder)

    })
    alert("Product Confimed")
    let data = await res.json()
    console.log(data)
}

