//Promise all
//Suppose an E-Commerce Dashboard needs:
//Products
//Categories
//User Profile
//The page should load only when all data is available
let products=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Products Loaded")
    },3000)
})
let users=new Promise(function(resolve){
    setTimeout(function(){
        resolve("User Loaded")
    },2000)
})
let orders=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Orders Loaded")
    },1000)
})
Promise.all([products,users,orders])
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})
//Promise.race
//Need the first promise that finishes
//Success or Failure 
let fastServer=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Fast Server")
    },1000)
})
let slowServer=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Slow Server")
    },5000)
})
Promise.race([fastServer,slowServer])
.then(function(result){
    console.log(result)
})
//Promise.allSettled()
//Sometimes we want all results even if some fail
let p1=Promise.resolve("Product Data")
let p2=Promise.reject("Server Error")
let p3=Promise.resolve("User Data")
Promise.allSettled([p1,p2,p3])
.then(function(result){
    console.log(result)
})
//Promise.any()
//Need the first Successful Promise
//Ignore failures 
let server1=Promise.reject("Server 1 is Failed")
let server2=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Server 2 Success")
    },3000)
})
let server3=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Server 3 Success")
    },1000)
})
Promise.any([server1,server2,server3])
.then(function(result){
    console.log(result)
})

//callback hell
// getUser(function(){
//     getOrders(function(){
//         getProducts(function(){
//             getReviews(function(){

//             })
//         })
//     })
// })
//This creates callback hell
//Promise solve this problem by providing a cleaner way to handle asynchronous operations
//Promise States
//Every Promise has 3 states
// Pending
//    ↓
// Resolved (Success)
//or
// Pending
//    ↓
// Rejected (Failure)

let order=new Promise(function(resolve,reject){
    let stockAvailable=true
    if(stockAvailable){
        resolve("Order Confirmed")
    }
    else{
        reject("Out of Stock")
    }
})
//Promise Execution Flow
// Promise Created
//        ↓
// Pending State
//        ↓
// Success ? Failure
//        ↓
// resolve() reject()
//        ↓
// .then() .catch()

//Async and await
//Even promises can become difficult 
//Lots if chaining
//Async marks function as asynchronous
//Always returns Promise
//Await pauses execution until Promise Resolve
//Can only be used inside the async functions
function process(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("process Loaded")
        },2000)
    })
}
process().then(function(result){
    console.log("Using Promise:",result)
})
//Using Async and await
async function loadProcess() {
    let result=await process()
    console.log("Using Async and Await:",result)
}
loadProcess()
// loadUser()
//      ↓
// await getUser()
//      ↓
// Wait
//      ↓
// Promise Resolved
//      ↓
// Continue Execution