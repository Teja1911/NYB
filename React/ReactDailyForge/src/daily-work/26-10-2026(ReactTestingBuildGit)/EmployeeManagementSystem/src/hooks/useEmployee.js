import { useEffect, useState } from "react";

import { useEmployeeContext } from "../context/EmployeeContext";

export function useEmployee(id) {
  const { getEmployeeById } = useEmployeeContext();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setEmployee(null);
      setLoading(false);
      setError("An employee ID is required.");
      return;
    }

    let cancelled = false;

    async function loadEmployee() {
      setLoading(true);
      setError(null);

      try {
        const result = await getEmployeeById(id);

        if (!cancelled) {
          setEmployee(result);
        }
      } catch (requestError) {
        if (!cancelled) {
          setEmployee(null);
          setError(requestError.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEmployee();

    return () => {
      cancelled = true;
    };
  }, [id, getEmployeeById]);

  return {
    employee,
    loading,
    error
  };
}