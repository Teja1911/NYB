import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

import { useAuth } from "../context/AuthContext";

function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
        description="Here's an overview of your employee management workspace."
      />

      <section className="dashboard-welcome">
        <div>
          <p className="dashboard-eyebrow">WORKFORCE OVERVIEW</p>

          <h2>Welcome, {user?.name || "Administrator"}!</h2>

          <p>
            Manage employee records and monitor your organization's workforce
            from one place.
          </p>
        </div>
      </section>

      <section
        className="stats-grid"
        aria-label="Employee statistics"
      >
        <StatCard
          title="Total Employees"
          value="—"
          description="Awaiting employee API integration"
          icon="👥"
        />

        <StatCard
          title="Active Employees"
          value="—"
          description="Will be calculated from employee records"
          icon="✓"
        />

        <StatCard
          title="Departments"
          value="—"
          description="Will be calculated from employee records"
          icon="▦"
        />
      </section>

      <section className="dashboard-next-step">
        <h2>Employee workspace</h2>

        <p>
          The employee directory will be available after we implement
          employee management and connect the API.
        </p>
      </section>

      <footer className="app-footer">
        Employee Management System · Dashboard
      </footer>
    </main>
  );
}

export default DashboardPage;