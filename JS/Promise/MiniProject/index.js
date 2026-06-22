let productName=document.getElementById("productName")
let priceInput=document.getElementById("priceInput")
let addproductBtn=document.getElementById("addproductBtn")
let search=document.getElementById("search")
let searchResult=document.getElementById("searchResult")
let displayProduct=document.getElementById("displayProduct")
let orderResult=document.getElementById("orderResult")
let placeOrder=document.getElementById("placeOrder")
let products=[]
let generateId=(function(){
    let count=1
    return function(){
        return count++
    }
})()
addproductBtn.addEventListener("click",addProduct)
function addProduct(){
    let name=productName.value.trim()
    let price=Number(priceInput.value)
    if(name === "" || price<=0){
        alert("Please Enter Valid Details")
        return
    }
    let product={
        id:generateId(),
        name:name,
        price:price
    }
    products.push(product)
    createRow(product)
    clearInputs()
    console.log(products)
}
function createRow(product){
    let tr=document.createElement("tr")
    let tdId=document.createElement("td")
    let tdName=document.createElement("td")
    let tdPrice=document.createElement("td")
    let tdAction=document.createElement("td")
    tdId.textContent=product.id
    tdName.textContent=product.name
    tdPrice.textContent=product.price
    tdAction.innerHTML=` <button class="deleteBtn">
            Delete
        </button>
    `
    tr.appendChild(tdId)
    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
    tr.appendChild(tdAction)
    displayProduct.appendChild(tr)
}
function clearInputs() {
    productName.value = ""
    priceInput.value = ""
    productName.focus()
}
//Search Product
search.addEventListener(
    "input",
    searchProduct
)
function searchProduct() {
    let searchText =
        search.value
            .toLowerCase()
            .trim()
    if (searchText === "") {
        searchResult.textContent = ""
        return
    }
    let product =
        products.find(function (product) {
            return product.name
                .toLowerCase()
                .includes(searchText)
        })
    if (product) {
        searchResult.textContent =`${product.name} is available for ₹${product.price}`
    }
    else {
        searchResult.textContent ="Product Not Found"
    }
}
//Event Delegation
displayProduct.addEventListener(
    "click",
    function (event) {
        if (
            event.target.classList.contains(
                "deleteBtn"
            )
        ) {
            let row =
                event.target
                    .parentElement
                    .parentElement
            let id =
                Number(row.firstElementChild.textContent)
            products =
                products.filter(function (product) {
                    return product.id !== id
                })
            row.remove()
        }
    }
);
//callback Function
function processOrder(callback) {
    orderResult.textContent =
        "Processing Order..."
    setTimeout(function () {
        callback()
    }, 3000)
}
//Promise 
function placeOrderPromise() {
    return new Promise(function (resolve, reject) {
        if (products.length > 0) {
            resolve(
                "Order Placed Successfully"
            )
        }
        else {
            reject(
                "Add At Least One Product"
            )
        }
    })
}
//Place Order Event
placeOrder.addEventListener(
    "click",
    function () {
        processOrder(function () {
            placeOrderPromise()
                .then(function (message) {
                    orderResult.textContent =message
                })
                .catch(function (error) {
                    orderResult.textContent =error
                })
        })
    }
)