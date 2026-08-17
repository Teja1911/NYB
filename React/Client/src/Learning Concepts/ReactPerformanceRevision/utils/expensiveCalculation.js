function expensiveCalculation(employees) {

    console.log("Running expensive calculation...");

    let totalSalary = 0;

    for (let i = 0; i < employees.length; i++) {

        // Simulate an expensive operation
        for (let j = 0; j < 1000000; j++) {
            Math.sqrt(j);
        }

        totalSalary += employees[i].salary;
    }

    return totalSalary;
}

export default expensiveCalculation;