//Product add to Mokapi
let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/products/"

var productMaterial = document.getElementById('productMaterial')
var productCategory = document.getElementById('productCategory')
var productPrice = document.getElementById('productPrice')
var productActualPrice = document.getElementById('productActualPrice')
var productURL = document.getElementById('productURL')
var productName = document.getElementById('productName')

var productId  = null;


async function productData() {
    try {

        if (productName.value != "" && productMaterial.value != "" && productCategory.value != "" && productPrice.value != "" && productActualPrice.value != "" && productURL.value != "") {
            console.log("hai")
            console.log(productName.value)
            let newProductDetail = {
                productName: productName.value,
                productType: productMaterial.value,
                productCat: productCategory.value,
                productPrice: productPrice.value,
                productActualPrice: productActualPrice.value,
                productURL: productURL.value,
            }
            let newProductData = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProductDetail)
            })
            alert("Product added Sucessfully ")
            location.reload()

            // productName.value = "";
            // productMaterial.value = "Choose...";
            // productCategory.value = "Choose...";
            // productPrice.value = "";
            // productActualPrice.value = "";
            // productURL.value = "";
        }
        else {
            alert("fill the data")
        }
    }
    catch (err) {
        console.log("data" + err)
    }
}

// get productData

async function getProductData() {
    try {
        var getProductDetails = await fetch(url)
        var productList = await getProductDetails.json()
        console.log(productList)
         productList.map((product) => {
            // console.log(product)
            var productDiv = document.getElementById('productDiv')
            var productCard = document.createElement('div')
            productCard.classList.add("card", "text-center", "m-3")
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
                <a class="btn btn-outline-success" onclick="productUpdate(${product.id})" title="edit the Price"><i class="fa-solid fa-pen"></i></a>
                <a class="btn btn-outline-danger" onclick="productDelete(${product.id})" title="To Delete Product"><i class="fa-solid fa-xmark"></i></a>
            </div>
            `
            productDiv.append(productCard)
        })

    }
    catch (error) {
        console.log(error)
    }

}
getProductData()

//update the Product detils
//display in the text box
async function productUpdate(id) {
    let pData = await fetch(url + id)
    let updateRes = await pData.json()
    console.log(updateRes)
    //update the data from the card to text box to eadit the values
    productName.value = updateRes.productName;
    productMaterial.value = updateRes.productType
    productCategory.value = updateRes.productCat
    productPrice.value = updateRes.productPrice
    productActualPrice.value = updateRes.productActualPrice
    productURL.value = updateRes.productURL
    productId = Number(updateRes.id)
    console.log(productId)
}

async function updateProductDetail(id) {
try{

    let updateProductDetail = {
        "name": productName.value,
        "productType": productMaterial.value,
        "productCat": productCategory.value,
        "productPrice": productPrice.value,
        "productActualPrice": productActualPrice.value,
        "productURL": productURL.value
    }
    let updateProductdata = await fetch(url + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateProductDetail)
    })
    let updateProduct = await updateProductdata.json()
    alert("Product updated sucessfully")
    console.log(updateProduct)
}
catch(err){
    console.log(err)
}
}


async function productDelete(id){
    try{

        let userResponse= confirm("Are you Sure Delete the Product")
        console.log(userResponse)
        if(userResponse===true){
            let productDeletedata=await fetch(url+id,{
                method:"DELETE",
                headers:{"Content-Type": "application/json"},
            })      
     
            alert("Product deleted")
            location.reload()
     
        }
        else{
         return false
        }
    }
    catch(err){
        console.log(err)
    }

}
