//Alert
//Immediate Notification to the user
let placeOrder=document.getElementById("placeOrder")
placeOrder.addEventListener("click",function(){
    alert("Your Order has been placed successful")
})
//Console.log()
//Developer wants to verify the product details before displaying them 
let product={
    id:1,
    name:"Laptop",
    price:60000
}
console.log(product)
let search=document.getElementById("search")
let output=document.getElementById("output")
search.addEventListener("input",function(){
    output.textContent="Product Available"
})
//innerHTML
let products=document.getElementById("product")
products.innerHTML=`<h2>Laptop</h2>
<p>Price: ₹65000</p>`

document.write("Hello World")



