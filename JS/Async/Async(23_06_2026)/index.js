//Async 
//Promise improved callbacks, but long Promise chains become difficult to read
//Using Async/Await
// Pauses Current Async Function
//         ↓
// Waits For Promise Resolution
//         ↓
// Continues Execution
//The Browser is Not blocked
//Only that async function pauses 
//Successful payment
//Using Promise
function processPayment(){
    return new Promise((resolve,reject)=>{
        let paymentSuccessful=true
        if(paymentSuccessful){
            resolve("Payment Successful")
        }
        else{
            reject("Payment Failed")
        }
    })
}
processPayment()
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("Transaction completed")
})
//Using Async/Await
async function placeOrder(){
    try{
        let result=await processPayment()
        console.log("Using Async/Await:",result)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Using Async/Await: Transaction Completed")
    }
}
placeOrder()
//Product Fetching API
//Using Promise
function fetchProducts(){
    return new Promise((resolve,reject)=>{
        let serverOnline=true
        setTimeout(function(){
            if(serverOnline){
                resolve(["Laptop","Mobile","Watch"])
            }
            else{
                reject("Server Down")
            }
        },2000)
    })
}
fetchProducts()
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})
//Using Async/Await
async function loadProducts(){
    try{
        console.log("Loading Products...")
        let products=await fetchProducts()
        console.log(products)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Loading Finished")
    }
}
loadProducts()

//Bank Example
function withdrawMoney(){
    return new Promise(function(resolve,reject){
            let balance = 500
            let amount = 1000
            if(balance >= amount){
                resolve("Cash Dispensed")
            }
            else{
                reject("Insufficient Balance")
            }
        }
    )
}
withdrawMoney()
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})
async function atm(){
    try{
        let result =
        await withdrawMoney();
        console.log(result);
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Thank You Visit Again")
    }
}
atm()