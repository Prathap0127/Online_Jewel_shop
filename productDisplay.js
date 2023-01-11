// Display Product in customer page
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/"

let search = document.getElementById("search")
let form = document.getElementById("form")
var customerProduct = document.getElementById('cProduct')
let searchSelect = document.getElementById('productCat')


var dataBase = [];












async function displayProducts() {
    try {
        // debugger
        var getProduct = await fetch(url + "products")
        var productList = await getProduct.json()
        dataBase = productList
        console.log(dataBase)
        htmlView(dataBase)
        
        search.addEventListener('keyup',(e)=>{
            let searchValue= e.target.value
            var filterdata = dataBase.filter((e)=>e.productName.includes(searchValue)||e.productType.includes(searchValue))
            console.log(filterdata)

            //    console.log(htmlView(filterdata))
            customerProduct.innerHTML= ""
            htmlView(filterdata)
        })
        
    }
    catch (error) {
        console.log(error)
    }
    
}

displayProducts()


function htmlView(data){
    data.map((product) => {
        // var customerProduct = document.getElementById('cProduct')
        var productCard = document.createElement('div')
        productCard.classList.add("card", "text-center", "m-1")
        productCard.style.width = "12rem"
        productCard.innerHTML = `
        <img src="${product.productURL}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-title">${product.productName}</p>
            <div class="d-flex justify-content-between">
                <p class="card-text">Rs.${product.productPrice}</p>
                <p class="card-text float-right"><small class="text-muted"><s>Rs.${product.productActualPrice}</s>
                    </small></p>
            </div>
            <button class="btn btn-outline-warning" onclick="addToCart(${product.id})">Buy now</button> <br>
        </div>
        `
        customerProduct.append(productCard)

    })

}




async function addToCart(id) {
    console.log(id)
    try {
        let checkorder = await fetch(url+"cart")
        let checkData = await checkorder.json()
        console.log(checkData)
    

        let res = await fetch(url + "products/" + id)
        let data = await res.json()
        console.log(data)
        let neworderData = {
            productName: data.productName,
            productType: data.productType,
            productCate: data.productCat,
            productPrice: data.productPrice,
            productActualPrice: data.productActualPrice,
            deliveryStatus: "pending",
            productQty: 1,
            productImg: data.productURL,
            orderedBy: sessionStorage.getItem('username'),
        }
        checkData.filter((e)=>{
            if(e.productName === neworderData.productName){
                console.log(neworderData.productQty= e.productQty+1)
                console.log(e.id)
                console.log(neworderData)
                console.log("product available")
                // throw(alert("product added already"))
            }
            
        })
        // if ()
        let order = await fetch(url + "cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(neworderData)
        })
        

        
        alert("product add to Orders")
        location.reload()

    }
    catch (err) {
        console.log(err)
    }


}
