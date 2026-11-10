export class Employee{
    constructor(name,role){
        this.id=Date.now() + Math.random()
        this.name=name.trim()
        this.role=role.trim()
    }
    getDetails(){
        return `${this.name} - ${this.role}`
    }
}
export function createEmployee(name,role){
    if(!name.trim() || !role.trim()){
        throw new Error("Employee name and role are required")
    }
    return new Employee(name,role)
}