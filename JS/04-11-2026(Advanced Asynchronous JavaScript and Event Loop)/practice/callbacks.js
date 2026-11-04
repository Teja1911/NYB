function getUser(callback){
    setTimeout(()=>callback("Teja"),1000)
}
getUser(name=>{
    console.log("User: ",name)
})