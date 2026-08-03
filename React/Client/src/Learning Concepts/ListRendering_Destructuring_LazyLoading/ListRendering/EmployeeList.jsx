function EmployeeList() {
    const employees=[
        {
            id:1,
            name:"John",
            department:"IT",
            salary:50000,
            status:"Active"
        },
        {
            id:2,
            name:"Steve",
            department:"HR",
            salary:45000,
            status:"Inactive"
        },
        {
            id:3,
            name:"David",
            department:"Finance",
            salary:65000,
            status:"Active"
        },
        {
            id:4,
            name:"Rahul",
            department:"Testing",
            salary:40000,
            status:"Active"
        }
    ]
    return(
        <div>
            <h1>
                Employee Dashboard
            </h1>
            {
                employees.map((employee)=>(
                    <div
                        key={employee.id}
                        className="employee-card"
                    >
                        <h2>
                            {employee.name}
                        </h2>
                        <p>
                            Department :
                            {employee.department}
                        </p>
                        <p>
                            Salary :
                            ₹{employee.salary}
                        </p>
                        <p>
                            Status :
                            <span
                            className={
                            employee.status==="Active"
                            ?
                            "active"
                            :
                            "inactive"
                            }
                            >
                            {employee.status}
                            </span>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
export default EmployeeList