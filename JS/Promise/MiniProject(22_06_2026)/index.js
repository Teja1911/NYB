let output=document.getElementById("output")
function productsServer(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Products Loaded")
        },3000)
    })
}
function categoryServer(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Categories Loaded")
        },2000)
    })
}
function userServer(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Users Loaded")
        },1000)
    })
}
function reviewServer(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("Review Server Failed")
        },1500)
    })
}
document.getElementById("allBtn")
.addEventListener("click",function(){
    Promise.all([productsServer(),categoryServer(),userServer()])
    .then(function(result){
    output.innerHTML=result.join("<br>")
})
.catch(function(error){
    output.innerHTML=error
})
})

document.getElementById("raceBtn")
.addEventListener("click",function(){
    Promise.race([productsServer(),categoryServer(),userServer()])
    .then(function(result){
    output.innerHTML=result
})
})

document.getElementById("settledBtn")
.addEventListener("click",function(){
    Promise.allSettled([productsServer(),categoryServer(),userServer()])
    .then(function(result){
    output.innerHTML=""
    result.forEach(function(item){
        output.innerHTML+=JSON.stringify(item)+"<br><br>"
    })
})
})
document.getElementById("anyBtn")
.addEventListener("click",function(){
    Promise.any([reviewServer(),productsServer(),categoryServer()])
    .then(function(result){
        output.innerHTML=result
    })
    .catch(function(error){
        output.innerHTML=error
    })
})
document.getElementById("asyncBtn")
.addEventListener("click",loadDashboard)
async function loadDashboard() {
    try{
        let products=await productsServer()
        let categories=await categoryServer()
        let users=await userServer()
        output.innerHTML=products+"<br>"+categories+"<br>"+users
    }
    catch(error){
        output.innerHTML=error
    }
    
}