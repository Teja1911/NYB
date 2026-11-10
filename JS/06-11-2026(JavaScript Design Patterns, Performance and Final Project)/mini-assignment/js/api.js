export async function fetchEmployees(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error("Unable to fetch employees.")
    }
    const users=await response.json()
    return users.slice(0,5).map(user=>({
        id:user.id,
        name:user.name,
        role:user.company.name
    }))
}