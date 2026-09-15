export class Employee {

    constructor(id, name, email) {

        this.id = id;
        this.name = name;
        this.email = email;
    }


    getDetails() {

        return `${this.name} - ${this.email}`;
    }
}