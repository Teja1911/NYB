const STORAGE_KEY="userProfile"
class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name="ValidationError"
    }
}
function validateUser(user){
    if(!user.name.trim()){
        throw new ValidationError("Name is required")
    }
    if(!user.email.trim()){
        throw new ValidationError("Email is required")
    }
    if(!user.role.trim()){
        throw new ValidationError("Role is required")
    }
    return true 
}

function saveUser(user){
    validateUser(user)
    const jsonData=JSON.stringify(user)
    localStorage.setItem(STORAGE_KEY,jsonData)
    console.log("User saved successfully")
    console.log("")
}

function getUser(){
    const storedData=localStorage.getItem(STORAGE_KEY)
    if(!storedData){
        return null
    }
    try{
        return JSON.parse(storedData)
    }
    catch(error){
        throw new Error("Stored user data is invalid")
    }
}

function deleteUser(){
    localStorage.removeItem(STORAGE_KEY)
    console.log("user removed")
}

function displayUser(user){
    if(!user){
        console.log("No user found")
        return
    }
    console.log(`Name: ${user.name}`)
    console.log(`Email: ${user.email}`)
    console.log(`Role: ${user.role}`)
    console.log("")
}

const newUser={
    name:"Teja",
    email:"Tejaswar.rao@nybinfotech.in",
    role:"Frontend Developer"
}

try{
    saveUser(newUser)
    const savedUser=getUser()
    displayUser(savedUser)
}
catch(error){
    if(error instanceof ValidationError){
        console.log(`Validation Error: ${error.message}`)
    }
    else{
        console.log(`Error: ${error.message}`)
    }
}
finally{
    console.log("Operation completed")
}

const savedUser = getUser();
console.log(savedUser);