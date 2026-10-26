import { useEmployeeContext } from "../context/EmployeeContext";

export function useEmployees() {
  const {
    employees,
    loading,
    error,
    fetchEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    clearError
  } = useEmployeeContext();

  return {
    employees,
    loading,
    error,
    fetchEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    clearError
  };
}
