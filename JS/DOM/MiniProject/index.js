let storeTitle=document.getElementById("storeTitle")
let products=document.getElementsByClassName("product")
let sectionTitle=document.querySelector(".sectionTitle")
let allProducts=document.querySelectorAll(".product")
document
.getElementById("updateBtn")
.addEventListener("click",function(){
    storeTitle.textContent="Mega Electronics Store"
    storeTitle.style.color="green"
    sectionTitle.textContent="Best Selling Products"
    for(let product of products){
        product.classList.add("highlight")
    }
    allProducts.forEach(function(item){
        if(item.textContent==="Headphones"){
            item.textContent+="- Out of Stock"
        }
        item.textContent = item.textContent+" - Available"
    })
})