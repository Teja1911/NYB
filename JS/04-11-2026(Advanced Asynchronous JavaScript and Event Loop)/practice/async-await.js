async function getData(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const user=await response.json()
    console.log(user)
}
getData()