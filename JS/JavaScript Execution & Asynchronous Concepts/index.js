// Call Stack is the mechanism javascript uses to keep track of which function is currently executing
function first(){
    console.log("First")
}
function second(){
    console.log("Second")
}
first()
second()

function one(){
    two()
}
function two(){
    three()
}
function three(){
    console.log("Hello")
}
one()

// Web APIs
setTimeout(()=>{
    console.log("Hello")
},2000)

console.log("A")
setTimeout(()=>{
    console.log("B")
},5000)
console.log("C")

function finalStep() {
    console.log("3. Inside the timeout callback (Call Stack is empty, then receives this).");
    console.trace(); // Prints the Call Stack at this exact moment
}

function startProcess() {
    console.log("1. Starting process (Pushing to Call Stack)...");
    
    // This goes straight to the browser's Web APIs environment
    setTimeout(finalStep, 2000); 
    
    console.log("2. setTimeout triggered (Handed off to Web APIs). Moving forward...");
}

startProcess();

// Microtask Queue 

console.log("Micro Task A")
Promise.resolve().then(()=>{
    console.log("Micro Task B")
})
console.log("Micro Task C")

// Macro Task

console.log("Macro Task A")
setTimeout(()=>{
    console.log("Macor Task B")
},0)
Promise.resolve().then(()=>{
    console.log("Macro Task C")
})
console.log("Macro Task D")

// Promise Revision
const promise = new Promise((resolve,reject)=>{
    const success=true
    if(success){
        resolve("Success")
    }
    else{
        reject("Failure")
    }
})
promise.then((result)=>{
    console.log(result)
})
promise.catch((error)=>{
    console.log(error)
})

// Promise Chaining 
Promise.resolve(10)
.then((value)=>{
    return value*2
})
.then((value)=>{
    return value+5
})
.then((value)=>{
    console.log(value)
})

// Async Revision
function getUsers(){
    return Promise.resolve({
        name:"Teja"
    })
}
async function showUser(){
    const user=await getUsers()
    console.log(user.name)
}
showUser()

