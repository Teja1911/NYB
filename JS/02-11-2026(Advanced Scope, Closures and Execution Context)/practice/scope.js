const globalName="Teja"
function showScope(){
    const functionName="Developer"
    if(true){
        let blockName="JavaScript"
        console.log(globalName, functionName, blockName)
    }
    console.log(functionName,globalName)
}
showScope()
// console.log(functionName) Reference Error
// console.log(blockName) Reference Error