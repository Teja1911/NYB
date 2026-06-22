let products=[]
let generateId=(function (){
    let id=1;
    return function(){
        return id++
    };
})();
function displayData(){
    let productBody= document.getElementById("productBody")
    productBody.innerHTML=""
    products.forEach(function(product){
        productBody.innerHTML+=
        `<tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.stock}</td>
        <td>
            <button onclick="editProduct(${product.id})">Edit</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        </td>
        </tr>
        `
    })
}
function clearForm(){
    let productName=document.getElementById("productName").value=""
    let category=document.getElementById("category").value=""
    let price=document.getElementById("price").value=""
    let stock=document.getElementById("stock").value=""
    document.getElementById("productName").focus()
}
let editId=null
function editProduct(id){
    let product=products.find(function(product){
        return product.id===id
    })
    document.getElementById("productName").value=product.name
    document.getElementById("category").value=product.category
    document.getElementById("price").value=product.value
    document.getElementById("stock").value=product.value
    id=editId
}
function addProduct(){
    let productName=document.getElementById("productName").value
    let category=document.getElementById("category").value
    let price=Number(document.getElementById("price").value)
    let stock=Number(document.getElementById("stock").value)
    if(
        productName === "" ||
        category === "" ||
        isNaN(price) ||
        isNaN(stock)
    ){
        alert("Please fill all fields")
        return
    }
    if(editId !== null){
        let product=products.find(function(product){
            return product.id===editId
        })
        product.name=productName
        product.category=category
        product.price=price
        product.stock=stock
    }
    else{
        let product={
        id:generateId(),
        name:productName,
        category:category,
        price:price,
        stock:stock
    };
    products.push(product)
    }
    
    displayData()
    clearForm()
    // console.log(product)
    console.log(products)
}
function searchProduct(){
    let searchText=document.getElementById("searchProduct").value.toLowerCase()
    if(searchText === ""){
            document.getElementById("searchItem").textContent=""
            return
        }
    let product = products.find(function(product){
        
        return product.name.toLowerCase().includes(searchText)
    })
    if(product){
        if(product.stock<5){
            document.getElementById("searchItem").textContent=product.name+ " is available with low stock"
        }
        else{
            document.getElementById("searchItem").textContent=product.name+ " is available"
        }
    }
    else{
        document.getElementById("searchItem").textContent="Product not found"
    }
}

function deleteProduct(id){
    products=products.filter(function(product){
        return product.id !== id
    })
    displayData()
}


