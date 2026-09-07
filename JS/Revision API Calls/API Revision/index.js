// API
// Application Programming Interface
// In frontend development, an API is commonly used to allow your frontend application to communicate with backend/server

// Fetch API
// JavaScript needs a way to communicate with a server
// Browser provides the Fetch API 
// Syntax: fetch(url)
// Example: fetch("https://jsonplaceholder.typicode.com/users")

// Promise:
// A Promise represents the eventual result of an asynchronous operation.

// GET Request
// GET Request is used to retrieve/read data from the server
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json)
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// .then()
// .then() handles a promise when it is successfully fulfilled
// Syntax: promise.then(result=>{//success})
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json)
// .then((data)=>console.log(data))

// .catch()
// .catch() handles rejected Promises/errors in the promise chain 
// Syntax
// promise
// .then(...)
// catch(error){
//      console.log(error)
// }
// Example:
// fetch("invalid-url")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("Something went wrong");
//     });

// async
// An async function allows us to use await
// Syntax:
// async function getUsers() {
// }

// await()
// await waits for a Promise to settle before continuing that async function 
async function getUser(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await response.json()
    console.log(data)
}
getUser()

// POST Request
// Here some data create/Process it
// Syntax:
// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// });
// Example:
async function postUser(){
const user={
    name:"Teja",
    role:"Frontend Developer"
}
try{
    const response=await fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
    })
    const data=await response.json()
    console.log("Success",data)
}
catch(error){
    console.log("Error",error)
}}
postUser()


