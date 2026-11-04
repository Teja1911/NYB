import { fetchUsers } from "./api.js";
import { debounce } from "./debounce.js";
const searchInput=document.querySelector("#searchInput")
const userList=document.querySelector("#userList")
const status=document.querySelector("#status")
let users=[]
function displayUsers(data){
    userList.innerHTML=""
    if(!data.length){
        status.textContent="No users found."
        return
    }
    status.textContent=`${data.length} user(s) found.`
    data.forEach(user=>{
        const card=document.createElement("div")
        card.className="user"
        card.innerHTML=`
            <strong>${user.name}</strong>
            <p>${user.email}</p>
            <p>${user.company.name}</p>
        `
        userList.append(card)
    })
}
async function loadUsers(){
    try{
        status.textContent="Loading Users.."
        users=await fetchUsers()
        displayUsers(users)
    }
    catch(error){
        status.textContent=error.message
    }
}
const searchUsers=debounce(value=>{
    const filteredUsers=users.filter(user=>
        user.name.toLowerCase().includes(value.toLowerCase())
    )
    displayUsers(filteredUsers)
},400)
searchInput.addEventListener("input",event=>{
    searchUsers(event.target.value.trim())
})
loadUsers()