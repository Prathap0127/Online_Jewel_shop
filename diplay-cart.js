// Display Product in customer page
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/product/"

async function displayProducts() {
    try {
        var getProduct = await fetch(url)
        var productList = await getProduct.json()
        console.log(productList)
         productList.map((product) => {
            console.log(product)
            var customerProduct = document.getElementById('cProduct')
            var productCard = document.createElement('div')
            productCard.classList.add("card", "text-center", "m-3")
            productCard.style.width = "13rem"
            productCard.innerHTML = `
            <img src="${product.productURL}" class="card-img-top" alt="...">
            <span onclick="favIconColor(${product.id})"><i id="favIcon${product.id}" class="fa fa-heart"></i></span>
            <div class="card-body">
                <p class="card-title">${product.name}</p>
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

function addToCart(id){
    

}
