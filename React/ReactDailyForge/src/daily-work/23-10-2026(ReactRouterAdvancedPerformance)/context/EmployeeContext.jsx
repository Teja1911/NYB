
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import employeeReducer, {
  initialEmployees,
} from "../reducers/employeeReducer";

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(employeeReducer, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        // Simulate loading initial data.
        await Promise.resolve();

        dispatch({
          type: "SET",
          payload: initialEmployees,
        });
      } catch {
        setError("Unable to load employees.");
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  function addEmployee(employee) {
    dispatch({
      type: "ADD",
      payload: { ...employee, id: Date.now() },
    });
  }

  function updateEmployee(employee) {
    dispatch({ type: "UPDATE", payload: employee });
  }

  function deleteEmployee(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        error,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}
