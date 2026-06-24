export function validateLogin(username,password){
    if(username.trim()===""){
        throw new Error("Username Required")
    }
    if(password.trim()===""){
        throw new Error("Password Required")
    }
    if(password.length<6){
        throw new Error("Password must be 6 Characters")
    }
    return true
}