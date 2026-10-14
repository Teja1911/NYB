
import { memo, useMemo } from "react";

const DepartmentRow = memo(function DepartmentRow({ name, count, salary }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
      <td>₹{salary.toLocaleString("en-IN")}</td>
    </tr>
  );
});

 function AnalyticsPage({ employees }) {
  const departmentStats = useMemo(() => {
    const groups = {};

    employees.forEach((employee) => {
      if (!groups[employee.department]) {
        groups[employee.department] = { count: 0, totalSalary: 0 };
      }

      groups[employee.department].count += 1;
      groups[employee.department].totalSalary += employee.salary;
    });

    return Object.entries(groups).map(([name, data]) => ({
      name,
      count: data.count,
      averageSalary: Math.round(data.totalSalary / data.count),
    }));
  }, [employees]);

  return (
    <section className="panel">
      <p className="eyebrow">DEPARTMENT REPORT</p>
      <h2>Analytics by Department</h2>
      <p>Employee distribution and average salary by department.</p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Employees</th>
              <th>Average Salary</th>
            </tr>
          </thead>
          <tbody>
            {departmentStats.map((item) => (
              <DepartmentRow
                key={item.name}
                name={item.name}
                count={item.count}
                salary={item.averageSalary}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default AnalyticsPage