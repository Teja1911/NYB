const task=new Promise((resolve,reject)=>{
    const success=true
    success ? resolve("Task Completed") : reject("Task Failed")
})
task.then(result=>console.log(result))
    .catch(error=>console.log(error))
    .finally(()=>console.log("Finished"))