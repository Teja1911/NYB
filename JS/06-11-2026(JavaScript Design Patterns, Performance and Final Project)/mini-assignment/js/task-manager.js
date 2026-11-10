export class TaskManager{
    #tasks=[]
    #listeners=[]
    subscribe(callback){
        this.#listeners.push(callback)
    }
    notify(){
        this.#listeners.forEach(callback=>callback(this.#tasks))
    }
    add(title,employeeId,employeeName){
        if(!title.trim() || !employeeId){
            throw new Error("Task title and employee required")
        }
        this.#tasks.push({
            id:Date.now(),
            title:title.trim(),
            employeeId,
            employeeName,
            completed:false
        })
        this.notify()
    }
    toggle(id){
        this.#tasks = this.#tasks.map(task=>task.id===id?{...task, completed: !task.completed}:task)
        this.notify()
    }
    delete(id){
        this.#tasks=this.#tasks.filter(task=>task.id !== id)
        this.notify()
    }
    getTasks(){
        return[...this.#tasks]
    }
    setTasks(tasks){
        this.#tasks=[...tasks]
        this.notify()
    }
}
export function createTaskId(){
    let id=1
    return ()=>id++
}