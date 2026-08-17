import { Link, useParams } from "react-router-dom";

function EmployeeDetails() {

    const { id } = useParams();

    const employees = [
        {
            id: 1,
            name: "Rahul",
            department: "Frontend",
            role: "React Developer",
            experience: "2 years",
        },
        {
            id: 2,
            name: "Priya",
            department: "Backend",
            role: "Node.js Developer",
            experience: "3 years",
        },
        {
            id: 3,
            name: "Arun",
            department: "Testing",
            role: "QA Engineer",
            experience: "1 year",
        },
    ];

    const employee = employees.find(
        (employee) => employee.id === Number(id)
    );

    if (!employee) {
        return (
            <div className="page">
                <h1>Employee Not Found</h1>

                <Link to="/employees">
                    Back to Employees
                </Link>
            </div>
        );
    }

    return (
        <div className="page">

            <h1>Employee Details</h1>

            <div className="employee-details">

                <h2>{employee.name}</h2>

                <p>
                    Employee ID: {employee.id}
                </p>

                <p>
                    Department: {employee.department}
                </p>

                <p>
                    Role: {employee.role}
                </p>

                <p>
                    Experience: {employee.experience}
                </p>

                <Link to="/revision-router/employees">
                    Back to Employees
                </Link>

            </div>

        </div>
    );
}

export default EmployeeDetails;