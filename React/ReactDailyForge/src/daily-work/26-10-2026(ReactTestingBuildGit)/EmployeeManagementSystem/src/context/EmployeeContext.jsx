import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
import { employeeReducer, initialEmployeeState } from "../reducers/employeeReducer";
import { employeeApi } from "../services/employeeApi";

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(
    employeeReducer,
    initialEmployeeState
  );

  const fetchEmployees = useCallback(async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const employees = await employeeApi.getAll();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: employees
      });

      return employees;
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message
      });

      throw error;
    }
  }, []);

  const getEmployeeById = useCallback(async (id) => {
    return employeeApi.getById(id);
  }, []);

  const addEmployee = useCallback(async (employee) => {
    const createdEmployee = await employeeApi.create(employee);

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: createdEmployee
    });

    return createdEmployee;
  }, []);

  const updateEmployee = useCallback(async (id, employee) => {
    const updatedEmployee = await employeeApi.update(id, employee);

    dispatch({
      type: "UPDATE_EMPLOYEE",
      payload: updatedEmployee
    });

    return updatedEmployee;
  }, []);

  const deleteEmployee = useCallback(async (id) => {
    await employeeApi.remove(id);

    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id
    });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: "CLEAR_ERROR" });
  }, []);

  const value = useMemo(
    () => ({
      employees: state.employees,
      loading: state.loading,
      error: state.error,
      fetchEmployees,
      getEmployeeById,
      addEmployee,
      updateEmployee,
      deleteEmployee,
      clearError
    }),
    [
      state.employees,
      state.loading,
      state.error,
      fetchEmployees,
      getEmployeeById,
      addEmployee,
      updateEmployee,
      deleteEmployee,
      clearError
    ]
  );

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployeeContext() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error(
      "useEmployeeContext must be used inside an EmployeeProvider."
    );
  }

  return context;
}