import { useEffect, useState } from "react"
import api from "../services/api"

function useEmployees() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchEmployees() {
    try {
      const response = await api.get("/users")
      setEmployees(response.data);
    } catch (err) {
      setError("Unable to fetch employees")
    } finally {
      setLoading(false)
    }
  }
    fetchEmployees()
  }, [])

  

  function addEmployee(employee) {
    const newEmployee = {
      id: Date.now(),
      company: {
        name: employee.department,
      },
      ...employee,
    }

    setEmployees((prev) => [...prev, newEmployee])
  }

  return {
    employees,
    loading,
    error,
    addEmployee,
  };
}

export default useEmployees