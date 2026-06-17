//Synchronous Execution
//Code runs line by line 
console.log("Start")
console.log("Middle")
console.log("End")
//Asynchronous Execution
//Some tasks run later without blocking the other code 
console.log("Asynchronous Execution")
console.log("Start")
// setTimeout(function(){
//     console.log("Hello")
// },2000)
console.log("End")

//Online Shopping offer Message
console.log("Website loaded")
let timerId=setTimeout(function(){
    console.log("Special Offer: 20% Discount")
},3000)
//clearTimeout()
//cancels a timeout before execution 
clearTimeout(timerId)
//setInterval()
//Runs Repeatedly
let intervalId=setInterval(function(){
    console.log(new Date())
},1000)
setTimeout(function(){
    clearInterval(intervalId)
},5000)

