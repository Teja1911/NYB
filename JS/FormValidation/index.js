// let submit=document.getElementById("submit")
// submit.addEventListener("click",()=>{
//     let username=document.getElementById("username").value
//     let email=document.getElementById("email").value
//     let password=document.getElementById("password").value
//     if(username ===""){
//         document.getElementById("message").innerText="Name is Required"
//     }
//     else if(email ===""){
//         document.getElementById("message").innerText="Email is Required"
//     }
//     else if(email.includes("@nybinfotech.com")===false){
//         document.getElementById("message").innerText="Enter a valid email"
//     }
//     else if(password.length<6){
//         document.getElementById("message").innerText="Password Must Contain 6 Characters"
//     }
//     else{
//         document.getElementById("message").innerText="Form Submitted Successful"
//     }
// })
let username=document.getElementById("username")
username.addEventListener("input",()=>{
    let value=username.value
    if(value === ""){
        document.getElementById("usernamemessage").innerText="Name is Required"
    }
    else{

    document.getElementById("usernamemessage")
    .innerText = ""
}})
let email=document.getElementById("email")
email.addEventListener("input",()=>{
    let value=email.value

    if(value.includes("@nybinfotech.com")){
        document.getElementById("emailmessage").innerText=""
    }
    else{
        document.getElementById("emailmessage").innerText="Enter a valid email"
    }
})
let password=document.getElementById("password")
password.addEventListener("input",()=>{
    let value=password.value
    if(value.length<6){
        document.getElementById("passwordmessage").innerText="Enter a valid password"
    }
    else{
        document.getElementById("passwordmessage").innerText=""
    }
})
let submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
    document.getElementById("message").innerText="Form Submitted successfully"
})