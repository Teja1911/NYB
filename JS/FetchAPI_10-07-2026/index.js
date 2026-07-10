const url = "https://jsonplaceholder.typicode.com/users"
const userContainer = document.getElementById("users")
const status = document.getElementById("status")

/*  GET REQUEST */

async function getUsers() {
    status.innerText = "Loading..."
    userContainer.innerHTML = ""
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Unable to fetch users")
        }
        const users = await response.json()
        status.innerText = ""
        users.forEach((user) => {
            userContainer.innerHTML += `
            <div class="card">
                <h3>${user.name}</h3>
                <p><b>Email :</b> ${user.email}</p>
                <p><b>Phone :</b> ${user.phone}</p>
                <p><b>Website :</b> ${user.website}</p>
            </div>
            `
        })
    }
    catch (error) {
        status.innerText = error.message
    }
}

/*  POST REQUEST */

async function createUser() {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Teja",
                email: "teja@gmail.com",
                phone: "9999999999"
            })
        })
        const data = await response.json()
        console.log(data)
        alert("POST Success")
    }
    catch {
        alert("POST Failed")
    }
}

/*  PUT REQUEST */

async function updateUser() {
    try {
        const response = await fetch(url + "/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id:1,
                name:"Updated Employee",
                email:"updated@gmail.com",
                phone:"8888888888"
            })
        })
        const data = await response.json()
        console.log(data)
        alert("PUT Success")
    }
    catch {
        alert("PUT Failed")
    }
}

/*  PATCH REQUEST */

async function patchUser() {

    try {
        const response = await fetch(url + "/1", {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"Only Name Updated"
            })
        })
        const data = await response.json()
        console.log(data)
        alert("PATCH Success")
    }
    catch{
        alert("PATCH Failed")
    }
}

/* DELETE REQUEST */

async function deleteUser() {
    try{
        const response = await fetch(url+"/1",{
            method:"DELETE"
        })

        if(response.ok){
            alert("DELETE Success")
        }
    }
    catch{
        alert("DELETE Failed")
    }
}