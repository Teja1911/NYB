// Factory Pattern
function createEmployee(name,role){
    return { name, role, getDetails(){
        return `${name} - ${role}`
    }}
}
const employee1=createEmployee("Teja","Developer")
console.log(employee1.getDetails())
// Observer Pattern
const EventManager={
    events:{},
    subscribe(event,callback){
        (this.events[event] ||= []).push(callback)
    },
    notify(event,data){
        (this.events[event] ||[]).forEach(callback=>callback(data))
    }
}
EventManager.subscribe("taskAdded",task=>console.log("New task:", task))
EventManager.notify("taskAdded","Build dashboard")