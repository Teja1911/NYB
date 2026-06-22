//Promises
//Purpose of Promises
//Promise is used to handle asynrochnous operations in clear way instead of creating the callback hell
//Examples:
//API Calls
//Database Requests
//Payment Processing
//Files Uploads
//Timer

//Promise has 3 Stages
//Pending 
//Resolved 
//Rejected 
//Syntax
//let promise=new Promise((resolve,reject){
//})

let payment=new Promise((resolve,reject)=>{
    let paymentSuccess=true
    if(paymentSuccess){
        resolve("Payment Successful")
    }
    else{
        rejected("Payment Failed")
    }
})
console.log(payment)

//Consuming Promises
//.then()
//.catch()

//.then() Handle Success
payment.then(function(result){
    console.log(result)
})

//.catch() Handles Error
payment.catch(function(error){
    console.log(error)
})

let order=new Promise((resolve,reject)=>{
    let stockAvailable=false
    setTimeout(function(){
        if(stockAvailable){
            resolve("Order Confirmed")
        }
        else{
            reject("Out of Stock")
        }
    },2000)
})
order.then(function(response){
    console.log(response)
})
order.catch(function(error){
    console.log(error)
})


//CallBack vs Promises
function orderProduct(callback){
    setTimeout(function(){
        console.log("Order Placed")
        callback()
    },2000)
}
function paymentProduct(){
    console.log("Payment Completed")
}
orderProduct(paymentProduct)
//Promise
function orders(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order Placed")
        },3000)
    })
}
orders().then(function (result){
    console.log(result)
    return "Payment Done"
})
.then(function (result){
    console.log(result)
    return "Email Sent"
})
.then(function (result){
    console.log(result)
})

let productPromise =
new Promise(function(resolve){

    setTimeout(function(){

        resolve("Products Loaded");

    },2000);

});

let userPromise =
new Promise(function(resolve){

    setTimeout(function(){

        resolve("User Loaded");

    },1000);

});

Promise.all([
    productPromise,
    userPromise
])
.then(function(result){

    console.log(result);

});

let p1 =
Promise.reject("Server A Failed");

let p2 =
new Promise(function(resolve){

    setTimeout(function(){

        resolve(
            "Server B Success"
        );

    },2000);

});

let p3 =
new Promise(function(resolve){

    setTimeout(function(){

        resolve(
            "Server C Success"
        );

    },1000);

});

Promise.any([
    p1,
    p2,
    p3
])
.then(function(result){

    console.log(result);

});
//Because it was the first successful promise.

Promise.allSettled([
    Promise.resolve("Product"),
    Promise.reject("Error"),
    Promise.resolve("User")
])
.then(console.log);

