export default class Employee{
    constructor({id,name,email,department,role,salary,experience}){
        this.id=id;
        this.name=name.trim();
        this.email=email.trim().toLowerCase();
        this.department=department;
        this.role=role.trim();
        this.salary=Number(salary);
        this.experience=Number(experience);
    }

    get annualSalary(){
        return this.salary*12;
    }

    getSummary(){
        return `${this.name} - ${this.role} (${this.department})`;
    }
}