import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(name, role, salary, team) {
        super(name, role, salary);
        this.team = team;
    }

    getDetails() {
        return `${super.getDetails()} - Team: ${this.team}`;
    }
}