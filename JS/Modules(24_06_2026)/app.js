import { createProduct } from "./product.js";
import { saveProducts,getProducts } from "./storage.js";
import { placeOrder } from "./order.js";
import { category } from "./product.js";
let products=getProducts()
console.log(category)
let product=createProduct(1,"Laptop",60000)
products.push(product)
saveProducts(products)
console.log(products)
placeOrder(product)
.then(function(result){
    console.log(result)
})