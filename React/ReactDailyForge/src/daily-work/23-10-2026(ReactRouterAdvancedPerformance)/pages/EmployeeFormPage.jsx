
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";

export default function EmployeeFormPage() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const { employees, addEmployee, updateEmployee } = useEmployees();
  const editing = Boolean(employeeId);

  const employee = employees.find(
    (item) => item.id === Number(employeeId)
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("IT");

  const nameInput = useRef(null);

  useEffect(() => {
    nameInput.current?.focus();
  }, []);

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setDepartment(employee.department);
    }
  }, [employee]);

  if (editing && !employee) {
    return <p>Employee not found.</p>;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const employeeData = {
      name: name.trim(),
      email: email.trim(),
      department,
    };

    if (editing) {
      updateEmployee({ ...employeeData, id: employee.id });
    } else {
      addEmployee(employeeData);
    }

    navigate("/employees");
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit}>
      <h2>{editing ? "Edit Employee" : "Add Employee"}</h2>

      <label>
        Name
        <input
          ref={nameInput}
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>

      <label>
        Department
        <select
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

      <button type="submit">
        {editing ? "Save Changes" : "Add Employee"}
      </button>

      <button type="button" onClick={() => navigate("/employees")}>
        Cancel
      </button>
    </form>
  );
}
