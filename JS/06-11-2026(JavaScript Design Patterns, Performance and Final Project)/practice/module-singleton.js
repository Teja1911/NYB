// Module Pattern: private data
const CounterModule=(()=>{
    let count=0
    return {
        increment(){
            return ++count
        },
        getCount(){
            return count
        }
    }
})()
console.log("Module:", CounterModule.increment())
console.log("Module:", CounterModule.getCount())
// Singleton Pattern: one shared instance
const AppSettings=(()=>{
    let instance
    function createInstance(){
        return { theme:"dark" , language:"English" }
    }
    return{
        getInstance(){
            if(!instance) instance=createInstance()
            return instance
        }
    }
})()
const settings1=AppSettings.getInstance()
const settings2=AppSettings.getInstance()
console.log("Singleton:" ,settings1 === settings2)