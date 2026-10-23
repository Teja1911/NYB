
import {
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

const EmployeeCount = memo(function EmployeeCount({
  count,
  onRefresh,
}) {
  console.log("EmployeeCount rendered");

  return (
    <p>
      Employee count: {count}{" "}
      <button onClick={onRefresh}>Log Count</button>
    </p>
  );
});

export default function PerformancePage() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ravi" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Arjun" },
  ]);

  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees");

    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  const logEmployeeCount = useCallback(() => {
    console.log("Total employees:", employees.length);
  }, [employees.length]);

  function addSampleEmployee() {
    setEmployees((previous) => [
      ...previous,
      { id: Date.now(), name: "New Employee" },
    ]);
  }

  return (
    <section>
      <h2>Performance Optimization Practice</h2>

      <p>Component renders: {renderCount.current}</p>
      <p>Unrelated counter: {counter}</p>

      <button onClick={() => setCounter((value) => value + 1)}>
        Update Counter
      </button>

      <EmployeeCount
        count={employees.length}
        onRefresh={logEmployeeCount}
      />

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search employees"
      />

      {filteredEmployees.map((employee) => (
        <p key={employee.id}>{employee.name}</p>
      ))}

      <button onClick={addSampleEmployee}>Add Sample Employee</button>

      <p>Open browser DevTools → Console to observe the logs.</p>
    </section>
  );
}
