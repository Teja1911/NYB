//input
let searchBox=document.getElementById("searchBox")
searchBox.addEventListener("input",function(){
    console.log(searchBox.value)
})
//change
let category=document.getElementById("category")
category.addEventListener("change",function(){
    console.log(category.value)
})
//Click Event
let addCartBtn=document.getElementById("addCartBtn")
addCartBtn.addEventListener("click",function(){
    alert(`${category.value} added to Cart`)
    // alert("Product added to cart")
})
//Submit
let loginForm=document.getElementById("loginForm")
loginForm.addEventListener("submit",function(event){
    event.preventDefault()
    alert("Form Submitted")
})

//Callback Function
//Function passed as argument to another function 
function greet(callback){
    console.log("Hello")
    callback()
}
function bye(){
    console.log("bye")
}
greet(bye)

//Execution Flow
// greet(sayBye)

//       ↓

// Hello

//       ↓

// callback()

//       ↓

// sayBye()

//       ↓

// Bye

function processPayment(callback){
    console.log("Payment Processing...")
    callback()
}
function paymentSuccessful(){
    console.log("Payment Successful...")
}
processPayment(paymentSuccessful)

//Throttling
//Problem is Suppose user scrolls continuously thousands of events fire
//Solution is Allow Execution only once every specific time interval
//Like if user on send otp if otp not came user click the button non stop the event fire continuously so if we throttling it will allow us to click the button after 30 seconds of time for resend the otp
// window.addEventListener("scroll",throttle(function(){
//     console.log("Fetching Data...")
// },1000))

function throttle(callback,delay){
    let lastCall=0
    return function(){
        let currentTime=Date.now()
        if(currentTime-lastCall>=delay){
            lastCall=currentTime
            callback()
        }

    }
}
function placeOrder(){
    console.log("Order Placed")
}
let throttleOrder=throttle(placeOrder,3000)
document.getElementById("orderBtn").addEventListener("click",throttleOrder)

//Debouncing 
//Search API Calls
// m
// mo
// mob
// mobi
// mobil
// mobile
//It will take 6 api calls request
//Solution:Wait until users stop typing 

function debounce(callback,delay){
    let timer
    return function(){
        clearTimeout(timer)
        timer=setTimeout(function(){
            callback()
        },delay)
    }
}

let Searchbox=document.getElementById("Searchbox")
Searchbox.addEventListener("click",debounce(function(){
    console.log("Searching...")
},5000))