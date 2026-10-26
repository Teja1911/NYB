import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import LoadingState from "../components/LoadingState";

import { ErrorMessage } from "../components/FeedbackStates";

import { useAuth } from "../context/AuthContext";
import { useEmployees } from "../hooks/useEmployees";

function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const {
    employees,
    loading,
    error,
    fetchEmployees
  } = useEmployees();

  useEffect(() => {
    fetchEmployees().catch(() => {
      // The context stores the error for display below.
    });
  }, [fetchEmployees]);

  const statistics = useMemo(() => {
    const activeEmployees = employees.filter(
      (employee) => employee.status === "Active"
    ).length;

    const departments = new Set(
      employees.map((employee) => employee.department)
    ).size;

    return {
      total: employees.length,
      active: activeEmployees,
      departments
    };
  }, [employees]);

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <main className="app-container">
      <header className="dashboard-topbar">
        <div className="dashboard-brand">
          <span className="dashboard-logo">EMS</span>
          <span>Employee Management</span>
        </div>

        <div className="dashboard-user">
          <div className="user-information">
            <strong>{user?.name || "Administrator"}</strong>
            <span>{user?.role || "Administrator"}</span>
          </div>

          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <PageHeader
        title="Dashboard"
        description="An overview of your employee management workspace."
      />

      {loading && <LoadingState message="Loading employee statistics..." />}

      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={() => fetchEmployees().catch(() => {})}
        />
      )}

      {!loading && !error && (
        <section className="stats-grid" aria-label="Employee statistics">
          <StatCard
            title="Total Employees"
            value={statistics.total}
            description="Records in the employee directory"
            icon="👥"
          />

          <StatCard
            title="Active Employees"
            value={statistics.active}
            description="Employees with Active status"
            icon="✓"
          />

          <StatCard
            title="Departments"
            value={statistics.departments}
            description="Distinct departments in the directory"
            icon="▦"
          />
        </section>
      )}

      <section className="dashboard-next-step">
        <h2>Employee workspace</h2>

        <p>
          {loading
            ? "Retrieving employee records..."
            : error
              ? "The employee API could not be reached. Start JSON Server and retry."
              : `Successfully loaded ${employees.length} employee records.`}
        </p>
      </section>

      <footer className="app-footer">
        Employee Management System · Dashboard
      </footer>
    </main>
  );
}

export default DashboardPage;
