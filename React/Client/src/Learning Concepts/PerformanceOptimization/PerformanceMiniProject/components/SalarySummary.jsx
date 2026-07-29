import { useMemo } from "react";

function SalarySummary({ employees }) {

    const salaryDetails = useMemo(() => {

        console.log("Calculating Salary Summary...");

        const totalSalary = employees.reduce(

            (total, employee) => total + employee.salary,

            0

        );

        const averageSalary =

            employees.length > 0
                ? totalSalary / employees.length
                : 0;

        const highestSalary =

            employees.length > 0
                ? Math.max(...employees.map(employee => employee.salary))
                : 0;

        const lowestSalary =

            employees.length > 0
                ? Math.min(...employees.map(employee => employee.salary))
                : 0;

        return {

            totalSalary,

            averageSalary,

            highestSalary,

            lowestSalary

        };

    }, [employees]);

    return (

        <div className="card">

            <h2>

                Salary Summary

            </h2>

            <p>

                Total Salary : £{salaryDetails.totalSalary}

            </p>

            <p>

                Average Salary : £{salaryDetails.averageSalary.toFixed(2)}

            </p>

            <p>

                Highest Salary : £{salaryDetails.highestSalary}

            </p>

            <p>

                Lowest Salary : £{salaryDetails.lowestSalary}

            </p>

        </div>

    );

}

export default SalarySummary;