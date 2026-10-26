import Button from "./components/Button";
import PageHeader from "./components/PageHeader";
import StatCard from "./components/StatCard";
import StatusBadge from "./components/StatusBadge";
import LoadingState from "./components/LoadingState";

import {
  EmptyState,
  ErrorMessage,
  SuccessMessage
} from "./components/FeedbackStates";

function App() {
  return (
    <main className="app-container">
      <PageHeader
        title="Employee Management System"
        description="Phase 2: Reusable React components."
        action={
          <Button
            onClick={() => alert("Employee creation will be implemented next.")}
          >
            Add Employee
          </Button>
        }
      />

      <section className="welcome-card">
        <h2>Dashboard component preview</h2>

        <div className="stats-grid">
          <StatCard
            title="Total Employees"
            value={120}
            description="Employees registered in the system"
            icon="👥"
          />

          <StatCard
            title="Active Employees"
            value={108}
            description="Currently active employees"
            icon="✓"
          />

          <StatCard
            title="Departments"
            value={8}
            description="Departments in the organization"
            icon="▦"
          />
        </div>

        <div className="component-demo">
          <h3>Employee Status</h3>

          <div className="demo-row">
            <StatusBadge status="Active" />
            <StatusBadge status="Inactive" />
            <StatusBadge status="On Leave" />
          </div>
        </div>

        <div className="component-demo">
          <h3>Button Variants</h3>

          <div className="demo-row">
            <Button onClick={() => alert("Primary button clicked")}>
              Primary
            </Button>

            <Button
              variant="secondary"
              onClick={() => alert("Secondary button clicked")}
            >
              Secondary
            </Button>

            <Button
              variant="danger"
              onClick={() => alert("Danger button clicked")}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className="component-demo">
          <h3>Loading State</h3>

          <LoadingState message="Example loading indicator" />
        </div>

        <div className="component-demo">
          <h3>Empty State</h3>

          <EmptyState
            title="No employees found"
            message="Employee records will appear here when available."
          />
        </div>

        <div className="component-demo">
          <h3>Error State</h3>

          <ErrorMessage message="This is an example error message." />
        </div>

        <div className="component-demo">
          <h3>Success State</h3>

          <SuccessMessage message="Example: Employee saved successfully." />
        </div>
      </section>

      <footer className="app-footer">
        Employee Management System · Phase 2
      </footer>
    </main>
  );
}

export default App;