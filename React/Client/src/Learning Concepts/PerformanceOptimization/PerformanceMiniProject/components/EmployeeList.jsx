import React from "react";

function EmployeeList({ employees }) {

    console.log("EmployeeList Rendered");

    return (

        <div className="card">

            <h2>

                Employee List

            </h2>

            {
                employees.length > 0 ? (

                    employees.map(employee => (

                        <div
                            key={employee.id}
                            className="employee-card"
                        >

                            <h3>

                                {employee.name}

                            </h3>

                            <p>

                                Salary : £{employee.salary}

                            </p>

                        </div>

                    ))

                ) : (

                    <p>

                        No Employees Found

                    </p>

                )
            }

        </div>

    );

}

export default React.memo(EmployeeList);