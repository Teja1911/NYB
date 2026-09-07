const loadButton=document.getElementById("loadButton")
const loadingMessage=document.getElementById("loadingMessage")
const errorMessage=document.getElementById("errorMessage")
const developerContainer=document.getElementById("developerContainer")
const API_URL= "https://jsonplaceholder.typicode.com/users"

function showLoading(){
    loadingMessage.textContent="Loading Developers..."
}

function hideLoading(){
    loadingMessage.textContent=""
}

function showError(message){
    errorMessage.textContent=message
}

function createDeveloperCard(developer){
    const card=document.createElement("div")
    card.innerHTML=`
    <h2>${developer.name}</h2>
    <p>Email: ${developer.email}</p>
    <p>Company: ${developer.company.name}</p>`
    return card
}

function displayDevelopers(developers){
    developerContainer.innerHTML=""
    developers.forEach(developer=>{
        const card=createDeveloperCard(developer)
        developerContainer.appendChild(card)
    })
}


async function loadDevelopers(){
    showLoading()
    errorMessage.textContent=""
    try{
        const response=await fetch(API_URL)
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`)
        }
        const developers=await response.json()
        displayDevelopers(developers)
    }
    catch(error){
        showError("Unable to load Developers")
        console.log(error)
    }
    finally{
        hideLoading()
    }   
}

loadButton.addEventListener("click",loadDevelopers)