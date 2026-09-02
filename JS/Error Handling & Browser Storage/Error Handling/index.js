// try
// try contains code that might produce an error
try{
    console.log("Strating...")
    const result=10/2
    console.log(result)
}
catch(error){
    console.log(error)
}
// catch 
// catch handles an error thrown from the corresponding try.
// Syntax:
// try{
// risky code
// }
// catch(error){
// handle error
// }
try {
    const result = JSON.parse("invalid json");

    console.log(result);
} catch (error) {
    console.log("Something went wrong");
}

// finally executes after try/catch regardless of whether an error occurred
// Syntax:
// try(){
// }catch(error){
// }
// finally{
// }
try {

    console.log("Trying...");

} catch (error) {

    console.log("Error");

} finally {

    console.log("Finished");

}

// throw 
// Javascript sometime doesn't automatically throw the error you want 
// You can create your own error using:
// throw new Error("New Message")
function checkAge(age){
    if(age<18){
        throw new Error("Age must be greather than 18")
    }
    return "Access Allowed"
}
try{
    console.log(checkAge(13))
}
catch(error){
    console.log(error.message)
}

// Custom Error
// Syntax:
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name="ValidationError"
    }
}
function validateUser(user){
    if(!user.name){
        throw new ValidationError("Name is required")
    }
    return true
}
try{
    validateUser({name:""})
}
catch(error){
    console.log(error.name)
    console.log(error.message)
}
