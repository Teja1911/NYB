const taskInput =
document.getElementById("taskInput")

const addBtn =
document.getElementById("addBtn")

const taskList =
document.getElementById("taskList")

const taskCount =
document.getElementById("taskCount")

const searchInput =
document.getElementById("searchInput")

const searchBtn =
document.getElementById("searchBtn")

const searchResult =
document.getElementById("searchResult")

let tasks = []

addBtn.addEventListener(
    "click",
    addTask
)

searchBtn.addEventListener(
    "click",
    searchTask
)

function addTask(){

    const task =
    taskInput.value.trim()

    if(task === ""){

        alert("Enter a Task")

        return
    }

    tasks.push(task)

    renderTasks()

    taskInput.value = ""

}

function renderTasks(){

    taskList.innerHTML = ""

    tasks.forEach((task,index)=>{

        const li =
        document.createElement("li")

        li.textContent = task

        const deleteBtn =
        document.createElement("button")

        deleteBtn.textContent =
        "Delete"

        deleteBtn.classList.add(
        "delete-btn"
        )

        deleteBtn.addEventListener(
        "click",
        ()=>{

            tasks.splice(index,1)

            renderTasks()

        })

        li.appendChild(deleteBtn)

        taskList.appendChild(li)

    })

    updateCount()

}

function updateCount(){

    taskCount.textContent =
    tasks.length

}

function searchTask(){

    const searchValue =
    searchInput.value.trim()

    if(searchValue === ""){

        searchResult.textContent =
        "Enter Task Name"

        return
    }

    const found =
    tasks.includes(searchValue)

    if(found){

        searchResult.textContent =
        `"${searchValue}" Found ✅`

    }
    else{

        searchResult.textContent =
        `"${searchValue}" Not Found ❌`

    }

}