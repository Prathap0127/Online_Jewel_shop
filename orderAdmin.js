// console.log("hai")
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/cart/"


async function orderList(){
try{
let res = await fetch(url)
let orderdata = await res.json()

orderdata.map((e,i)=>{
    let orderTable = document.getElementById('order_data')
    let tableBody = document.createElement('tbody')
    let tableRow = document.createElement('tr')

    tableRow.innerHTML=` 
    <td>${i+1}</td>
    <td>${e.productName}</td>
    <td>${e.productType}</td>
    <td>${e.productCate}</td>
    <td>${e.productPrice}</td>
    <td>${e.orderedBy}</td>
    <td>${e.deliveryStatus}</td>
    <td>${e.productQty}</td>
    <td>
    <button class="btn btn-outline-warning" onclick="removeOrder(${e.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
    <button class="btn btn-outline-warning" onclick="confirmOrder(${e.id})"><i class="fa fa-shopping-cart" title="order confrim" aria-hidden="true"></i></button>
     </td>
    `
    tableBody.append(tableRow)
    orderTable.append(tableBody)
})



}
catch(err){
    console.log()
}

}
async function removeOrder(id){
    try {
        let userResponse = confirm("Are you Sure cancel the order")
        // console.log(userResponse)
     
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
async function confirmOrder(id){
    try {
        let userResponse = confirm("Confirm the order")
        // console.log(userResponse)
        let productData = {
            deliveryStatus: "confirm",
           
        }
        if (userResponse === true) {
            let res = await fetch(url + id, {
                method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData)})
   

            alert("Product Order Confirmed")
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



orderList()