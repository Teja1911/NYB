import { Link } from "react-router-dom";

function Employees() {

    const employees = [
        {
            id: 1,
            name: "Rahul",
            department: "Frontend",
            role: "React Developer",
        },
        {
            id: 2,
            name: "Priya",
            department: "Backend",
            role: "Node.js Developer",
        },
        {
            id: 3,
            name: "Arun",
            department: "Testing",
            role: "QA Engineer",
        },
    ];

    return (
        <div className="page">

            <h1>Employees</h1>

            <p>
                Select an employee to view their details.
            </p>

            <div className="employee-list">

                {employees.map((employee) => (

                    <div
                        className="employee-card"
                        key={employee.id}
                    >

                        <h2>
                            {employee.name}
                        </h2>

                        <p>
                            Department: {employee.department}
                        </p>

                        <p>
                            Role: {employee.role}
                        </p>

                        <Link
                            to={`${employee.id}`}
                        >
                            View Details
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Employees;