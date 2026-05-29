//Truthy values and Falsy values in JavaScript conditions don't always need true or false 
//JavaScript always converts values to boolean 
//Falsy Values are
//false
//0
//""
//null
//Undefined
//NaN
//-0
//-0n

//Truthy Values Everything else is truthy Values 

let username=""
if(username){
    console.log("User  exists")
}
else{
    console.log("Username Empty ")
}

let name="Teja"
if(name){
    console.log("Name Exists")
}
else{
    console.log("Name Not Exists")
}

if(0){
    console.log("Truthy Value")
}
else{
    console.log("Falsy Value")
}

if(1){
    console.log("Truthy Value")
}
else{
    console.log("Falsy Value")
}
