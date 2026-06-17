let products=document.getElementById("products")
products.addEventListener("click",function(event){
    if(event.target.classList.contains("buyBtn")){
        let productName=event.target.previousElementSibling.textContent
        alert("Buying "+productName)
    }
})
