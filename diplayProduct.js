// Display Product in customer page
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/"

let search = document.getElementById("search")
let form = document.getElementById("form")
async function displayProducts() {
    try {
        var getProduct = await fetch(url + "products")
        var productList = await getProduct.json()
        console.log(productList)

        search.addEventListener('keyup', (e) => {
            let searchData = e.target.value;
            let filterData = productList.filter((e)=>{
                // console.log(e.productName)
                e.productName.includes(searchData)
            })
            console.log(filterData)
        })
        productList.map((product) => {
            var customerProduct = document.getElementById('cProduct')
            var productCard = document.createElement('div')
            productCard.classList.add("card", "text-center", "m-3")
            productCard.style.width = "13rem"
            productCard.innerHTML = `
            <img src="${product.productURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-title">${product.productName}</p>
                <div class="d-flex justify-content-between">
                    <p class="card-text">Rs.${product.productPrice}</p>
                    <p class="card-text float-right"><small class="text-muted"><s>Rs.${product.productActualPrice}</s>
                        </small></p>
                </div>
                <a href="#" class="btn btn-outline-warning" onclick="addToCart(${product.id})">Buy now</a> <br>
            </div>
            `
            customerProduct.append(productCard)
        })

    }
    catch (error) {
        console.log(error)
    }

}
displayProducts()




async function addToCart(id) {
    console.log(id)
    try {
        let res = await fetch(url + "products/" + id)
        let data = await res.json()
        console.log(data)
        let neworderData = {
            productName: data.productName,
            productType: data.ProductType,
            productCate: data.productCat,
            productPrice: data.productPrice,
            productActualPrice: data.productActualPrice,
            deliveryStatus: "pending",
            orderedBy: "user",
            productQty: 1,
            productImg: data.productURL,
            orderedBy: sessionStorage.getItem('username')
        }
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
