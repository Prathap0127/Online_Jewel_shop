








// add product

var productName = document.getElementById('productName')
var productMaterial = document.getElementById('productMaterial')
var productCategory = document.getElementById('productCategory')
var productPrice = document.getElementById('productPrice')
var productActualPrice = document.getElementById('productActualPrice')
var productURL = document.getElementById('productURL')

var productDiv = document.getElementById('productDiv')
var id=0;



function productList(){
    console.log("add Product")
    if(productName.value!=""&&productMaterial.value!=""&&productCategory.value!=""&&productPrice.value!=""&&productActualPrice.value!=""&&productURL.value!="")
    {
    addProduct(id)
    productName.value="";
    productMaterial.value="";
    productCategory.value="";
    productPrice.value="";
    productActualPrice.value="";
    productURL.value="";
        
    }
    else{
        alert("fill all the field")
    }


}


function addProduct() {
    console.log("added sucessfully")
    console.log(productName.value)
    console.log(productMaterial.value,productCategory.value)
    id++;
    var addProductDiv = document.createElement('div')
    addProductDiv.classList.add("card", "text-center", "m-3")
    addProductDiv.style.width = "12rem"
    addProductDiv.id="Product"+id;
    console.log(addProductDiv.id)
    addProductDiv.innerHTML = `
            <img src="${productURL.value}" id="productImg${id}" class="card-img-top" alt="${productName.value}">
                <div class="card-body">
                    <h5 id="productName${id}" class="card-title">${productName.value}</h5>
                        <div class="d-flex justify-content-between">
                            <p id="productPrice${id}" class="card-text">Rs.${productPrice.value}</p>
                            <p class="card-text float-right"><small class="text-muted"><s id="productActualPrice${id}">Rs.${productActualPrice.value}</s>
                                        </small></p>
                                        <input type="hidden" id="productMaterial${id}" value="${productMaterial.value}">   
                                        <input type="hidden" id="productCategory${id}" value="${productCategory.value}">   
                        </div>
                  <button href="#" class="btn btn-outline-warning mb-1">Buy now</button> <br>
                  <a class="btn btn-outline-success" onclick="updateProduct(${id})" title="edit the Price"><i class="fa-solid fa-pen"></i></a>
                  <a class="btn btn-outline-success" onclick="saveProduct(${id})" title="Update the Price"><i class="fa-solid fa-pen-to-square"></i></a>
                  <a class="btn btn-outline-danger" onclick="deleteProduct(${id})" title="To Delete Product"><i class="fa-solid fa-xmark"></i></a>
                </div>
`
    productDiv.append(addProductDiv)
}

function updateProduct(id){
    console.log("product updated "+id)
    // productName.value=document.getElementById("productName"+id).innerText;
    // productMaterial.value=document.getElementById("productMaterial"+id).value;
    // // console.log(productMaterial.value)
    // productCategory.value=document.getElementById("productCategory"+id).value;
    // productPrice.value=document.getElementById("productPrice"+id).innerText.slice(3);
    // productActualPrice.value=document.getElementById("productActualPrice"+id).innerText.slice(3);
    // productURL.value=document.getElementById("productImg"+id).src
    // return id;

    // document.getElementById("productName"+id).contentEditable="true";
    // to edit the content Price
    document.getElementById("productPrice"+id).contentEditable="true";
    document.getElementById("productPrice"+id).style.backgroundColor="yellow";
    document.getElementById("productActualPrice"+id).contentEditable="true";
    document.getElementById("productActualPrice"+id).style.backgroundColor="yellow";
    


}
function saveProduct(id){
    document.getElementById("productPrice"+id).contentEditable="false";
    document.getElementById("productPrice"+id).style.backgroundColor="white";
    document.getElementById("productActualPrice"+id).contentEditable="false";
    document.getElementById("productActualPrice"+id).style.backgroundColor="white";
}


function deleteProduct(id){
    console.log("Product"+id)
    let deleteProductDetails="Are you sure want to delete the product"
    if(confirm(deleteProductDetails)==true){
        document.getElementById("Product"+id).remove()
    }
}
function favIconColor(){
    var favIcon=document.getElementById('favIcon1')
    if(true){
        favIcon.style.color="red";
    }
    else{
        favIcon.style.color="white";
    }
}


// product in customer page

// var displayProductDiv=document.getElementById('displayProduct')
// function displayProduct(){
//     id=0;
//     var disProductDiv = document.createElement('div')
//     disProductDiv.classList.add("card", "text-center", "m-3")
//     disProductDiv.style.width = "12rem"
//     disProductDiv.id="Product"+id;
//     console.log(disProductDiv.id)
//     disProductDiv.innerHTML = `
//             <img src="${productURL.value}" id="productImg${id}" class="card-img-top" alt="${productName.value}">
//                 <div class="card-body">
//                     <h5 id="productName${id}" class="card-title">${productName.value}</h5>
//                         <div class="d-flex justify-content-between">
//                             <p id="productPrice${id}" class="card-text">Rs.${productPrice.value}</p>
//                             <p class="card-text float-right"><small class="text-muted"><s id="productActualPrice${id}">Rs.${productActualPrice.value}</s>
//                                         </small></p>
//                                         <input type="hidden" id="productMaterial${id}" value="${productMaterial.value}">   
//                                         <input type="hidden" id="productCategory${id}" value="${productCategory.value}">   
//                         </div>
//                   <button href="#" class="btn btn-outline-warning mb-1">Buy now</button> <br>
//                   <a class="btn btn-outline-success" onclick="updateProduct(${id})" title="edit the Price"><i class="fa-solid fa-pen"></i></a>
//                   <a class="btn btn-outline-success" onclick="saveProduct(${id})" title="Update the Price"><i class="fa-solid fa-pen-to-square"></i></a>
//                   <a class="btn btn-outline-danger" onclick="deleteProduct(${id})" title="To Delete Product"><i class="fa-solid fa-xmark"></i></a>
//                 </div>
// `
//     displayProductDiv.append(disProductDiv)
//     id++

// }
// displayProduct()