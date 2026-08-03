import { useMemo } from "react";
import employeeData from "../utils/employeeData";
import useTheme from "../hooks/useTheme";
import WithAuth from "../hoc/WithAuth";

function Reports() {

    const { theme } = useTheme();

    const totalEmployees = useMemo(
        () => employeeData.length,
        []
    );

    const activeEmployees = useMemo(
        () =>
            employeeData.filter(
                (employee) => employee.status === "Active"
            ).length,
        []
    );

    const inactiveEmployees = useMemo(
        () =>
            employeeData.filter(
                (employee) => employee.status === "Inactive"
            ).length,
        []
    );

    const totalSalary = useMemo(
        () =>
            employeeData.reduce(
                (total, employee) =>
                    total + Number(employee.salary),
                0
            ),
        []
    );

    const averageSalary = useMemo(
        () => Math.round(totalSalary / totalEmployees),
        [totalSalary, totalEmployees]
    );

    const departmentReport = useMemo(
        () =>
            employeeData.reduce((result, employee) => {

                result[employee.department] =
                    (result[employee.department] || 0) + 1;

                return result;

            }, {}),
        []
    );

    return (

        <div className={`reports ${theme}`}>

            <h1>

                Employee Reports

            </h1>

            <div className="report-cards">

                <div className="report-card">

                    <h2>Total Employees</h2>

                    <h3>{totalEmployees}</h3>

                </div>

                <div className="report-card">

                    <h2>Active Employees</h2>

                    <h3>{activeEmployees}</h3>

                </div>

                <div className="report-card">

                    <h2>Inactive Employees</h2>

                    <h3>{inactiveEmployees}</h3>

                </div>

                <div className="report-card">

                    <h2>Total Salary</h2>

                    <h3>

                        ₹{totalSalary.toLocaleString()}

                    </h3>

                </div>

                <div className="report-card">

                    <h2>Average Salary</h2>

                    <h3>

                        ₹{averageSalary.toLocaleString()}

                    </h3>

                </div>

            </div>

            <div className="department-report">

                <h2>

                    Department Statistics

                </h2>

                {

                    Object.entries(departmentReport).map(

                        ([department, count]) => (

                            <div

                                key={department}

                                className="department-item"

                            >

                                <strong>

                                    {department}

                                </strong>

                                <span>

                                    {count}

                                </span>

                            </div>

                        )

                    )

                }

            </div>

        </div>

    );

}

export default WithAuth(Reports);