//Local Storage
// Refresh Page
// ↓
// Data Lost
//Needed permanent Browser Storage
//Local Storage
//Stores data permanently in browser
//Even after
// Refresh
// Browser Restart
//Data Remains
// localStorage.setItem("name","Teja")
// let name=localStorage.getItem("name")
// console.log(name)
// localStorage.removeItem("name")
// localStorage.clear()
//Session Storage
//Need Temporary Storage
//When Tabs closes
//Data Removed
// sessionStorage.setItem("user","Teja")
// console.log(sessionStorage.getItem("user"))

let userName=document.getElementById("userName")
let output=document.getElementById("output")
document.getElementById("localBtn")
.addEventListener("click",function(){
    localStorage.setItem("user",userName.value)
    output.textContent="Saved in Local Storage"
})
document.getElementById("sessionBtn")
.addEventListener("click",function(){
    sessionStorage.setItem("user",userName.value)
    output.textContent="Saved in Session Storage"
})
document.getElementById("showBtn")
.addEventListener("click",function(){
    let localUser=localStorage.getItem("user")
    let sessionUser=sessionStorage.getItem("user")
    output.innerHTML=
    `Local Storage User: ${localUser}
    <br><br>
    Session Storage User: ${sessionUser}`
})
document.getElementById("clearBtn")
.addEventListener("click",function(){
    localStorage.clear()
    sessionStorage.clear()
    output.textContent="Storage Cleared"
})

//Local Storage
// Save User
//      ↓
// Refresh
//      ↓
// Exists

// Close Browser
//      ↓
// Exists

// Restart PC
//      ↓
// Exists

//Session Storage
// Save User
//      ↓
// Refresh
//      ↓
// Exists

// Close Tab
//      ↓
// Deleted