export function createSessionManager(){
    let currentUser=null
    return{
        login(name){
            if(!name.trim()) throw new Error ("Username is required")
            currentUser={name:name.trim(),loginTime:new Date()}
            return `${currentUser.name} logged in.`
        },
        logout(){
            if(!currentUser) return "No active session."
            const name=currentUser.name
            currentUser=null
            return `${name} logged out.`
        },
        getUser(){
            return currentUser ? {...currentUser} : null
        }
    }
}