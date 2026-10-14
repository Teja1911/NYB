
import {
  lazy,
  memo,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from "react";
import "./EmployeeAnalyticsAssessment.css";

// Loaded only when the Analytics section is opened
const AnalyticsPage = lazy(() => import("./AnalyticsPage"));

const initialEmployees = Array.from({ length: 500 }, (_, index) => ({
  id: index + 1,
  name: ["Ananya Rao", "Rahul Kumar", "Priya Sharma", "Arjun Reddy"][index % 4]
    + ` ${index + 1}`,
  department: ["Engineering", "HR", "Finance", "Design"][index % 4],
  salary: 30000 + (index % 15) * 2500,
  status: index % 5 === 0 ? "Inactive" : "Active",
}));

function EmployeeRow({ employee, onSelect }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>₹{employee.salary.toLocaleString("en-IN")}</td>
      <td>
        <span className={`status ${employee.status.toLowerCase()}`}>
          {employee.status}
        </span>
      </td>
      <td>
        <button onClick={() => onSelect(employee.id)}>Select</button>
      </td>
    </tr>
  );
}

// React.memo skips row renders when the props remain equal
const MemoEmployeeRow = memo(EmployeeRow);

function SummaryCards({ employees }) {
  const summary = useMemo(() => {
    const active = employees.filter((e) => e.status === "Active").length;
    const totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);

    return {
      total: employees.length,
      active,
      inactive: employees.length - active,
      averageSalary: employees.length
        ? Math.round(totalSalary / employees.length)
        : 0,
    };
  }, [employees]);

  return (
    <section className="summary-grid">
      <article className="summary-card">
        <span>Total Employees</span><strong>{summary.total}</strong>
      </article>
      <article className="summary-card">
        <span>Active Employees</span><strong>{summary.active}</strong>
      </article>
      <article className="summary-card">
        <span>Inactive Employees</span><strong>{summary.inactive}</strong>
      </article>
      <article className="summary-card">
        <span>Average Salary</span>
        <strong>₹{summary.averageSalary.toLocaleString("en-IN")}</strong>
      </article>
    </section>
  );
}

 function EmployeeAnalyticsAssessment() {
  const [employees] = useState(initialEmployees);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState("dashboard");
  const [optimized, setOptimized] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [counter, setCounter] = useState(0);

  const departments = useMemo(
    () => ["All", ...new Set(employees.map((e) => e.department))],
    [employees]
  );

  const visibleEmployees = useMemo(() => {
    return employees
      .filter((employee) => {
        const matchesName = employee.name.toLowerCase()
          .includes(search.toLowerCase());
        const matchesDepartment =
          department === "All" || employee.department === department;

        return matchesName && matchesDepartment;
      })
      .sort((a, b) => {
        if (sortBy === "salary") return b.salary - a.salary;
        if (sortBy === "department") {
          return a.department.localeCompare(b.department);
        }
        return a.name.localeCompare(b.name);
      });
  }, [employees, search, department, sortBy]);

  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const Row = optimized ? MemoEmployeeRow : EmployeeRow;

  return (
    <main className="analytics-app">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">PERFORMANCE LAB</p>
          <h1>Employee Analytics</h1>
          <p>Explore 500 employee records and compare render behavior.</p>
        </div>
        <button onClick={() => setPage(
          page === "dashboard" ? "analytics" : "dashboard"
        )}>
          {page === "dashboard" ? "Open Analytics" : "Back to Dashboard"}
        </button>
      </header>

      {page === "analytics" ? (
        <Suspense fallback={<div className="panel">Loading analytics module...</div>}>
          <AnalyticsPage employees={employees} />
        </Suspense>
      ) : (
        <>
          <SummaryCards employees={employees} />

          <section className="panel">
            <div className="toolbar">
              <input
                placeholder="Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select value={department}
                onChange={(e) => setDepartment(e.target.value)}>
                {departments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">Sort by name</option>
                <option value="department">Sort by department</option>
                <option value="salary">Sort by salary</option>
              </select>
            </div>

            <div className="toolbar">
              <button onClick={() => setOptimized((value) => !value)}>
                Mode: {optimized ? "Optimized" : "Unoptimized"}
              </button>
              <button onClick={() => setCounter((value) => value + 1)}>
                Unrelated update: {counter}
              </button>
              <span>{visibleEmployees.length} matching employees</span>
            </div>

            {selectedId !== null && (
              <p className="selection">
                Selected employee ID: {selectedId}
              </p>
            )}

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ID</th><th>Name</th><th>Department</th>
                    <th>Salary</th><th>Status</th><th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleEmployees.map((employee) => (
                    <Row
                      key={employee.id}
                      employee={employee}
                      onSelect={handleSelect}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {visibleEmployees.length === 0 && <p>No matching employees.</p>}
          </section>
        </>
      )}
    </main>
  );
}
export default EmployeeAnalyticsAssessment