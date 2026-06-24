export function saveLocalUser(user){
    localStorage.setItem("user",user)
}
export function saveSessionUser(user){
    sessionStorage.setItem("user",user)
}
export function getLocalUser(){
    return localStorage.getItem("user")
}
export function getSessionUser(){
    return sessionStorage.getItem("user")
}
export function clearStorage(){
    localStorage.clear()
    sessionStorage.clear()
}