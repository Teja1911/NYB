class Employee {

    constructor(name, age, designation) {

        this.name = name;

        this.age = age;

        this.designation=designation;

    }

    getDetails() {

        return `${this.name} is ${this.age} years old and works as a ${this.designation}.`;

    }

}

export default Employee