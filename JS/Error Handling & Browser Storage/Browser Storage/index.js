// Local Storage
// Local Storage allows browser to store data in key-value pairs
// Syntax
// localStorage.setItem(
//     "key",
//     "value"
// );

localStorage.setItem("username","Teja")
localStorage.setItem("age",22)
const username=localStorage.getItem("username")
console.log(username)
const age=localStorage.getItem("age")
console.log(age)
localStorage.removeItem("age")
localStorage.clear()
if(username!==null){
    console.log("User Exists")
}
else{
    console.log("User not exists")
}

const user={
    name:"Teja",
    age:22
}
const jsonData=JSON.stringify(user)
localStorage.setItem("user",JSON.stringify(user))
const userName=JSON.parse(localStorage.getItem("user"))
console.log(userName)

// Session Storage
sessionStorage.setItem("userName","Surya")
const sessionUser=sessionStorage.getItem("userName")
console.log(sessionUser)
sessionStorage.removeItem("userName")
sessionStorage.clear()