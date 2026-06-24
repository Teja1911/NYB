import { validateLogin } from "./auth.js";
import { saveLocalUser,saveSessionUser,getLocalUser,getSessionUser,clearStorage } from "./storage.js";
let username=document.getElementById("userName")
let password=document.getElementById("password")
let message=document.getElementById("message")
let currentUser=document.getElementById("currentUser")
document.getElementById("localLogin")
.addEventListener("click",function(){
    try{
        validateLogin(username.value,password.value)
        saveLocalUser(username.value)
        message.textContent="Saved in local Storage"
    }
    catch(error){
        message.textContent=error.message
    }
    finally{
        console.log("Local Login Attempt Finished")
    }
})
document.getElementById("sessionLogin")
.addEventListener("click",function(){
    try{
        validateLogin(username.value,password.value)
        saveSessionUser(username.value)
        message.textContent="Saved in Session Storage"
    }
    catch(error){
        message.textContent=message.error
    }
    finally{
        console.log("Session Login Attempt Finished")
    }
})
document.getElementById("showUser")
.addEventListener("click",function(){
    let localUser=getLocalUser()
    let sessionUser=getSessionUser()
    currentUser.innerHTML=
    `Local Storage User: ${localUser}
    <br><br>
    Session Storage User: ${sessionUser}`
})
document.getElementById("logout")
.addEventListener("click",function(){
    clearStorage()
    currentUser.textContent="No User Logged In"
    message.textContent="Logged Out"
})