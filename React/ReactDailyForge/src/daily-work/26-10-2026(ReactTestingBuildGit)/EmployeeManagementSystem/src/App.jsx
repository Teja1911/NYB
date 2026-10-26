import { useState } from "react";

function App() {
  const [applicationName] = useState("Employee Management System");

  return (
    <main className="app-container">
      <header className="app-header">
        <div>
          <p className="app-label">EMPLOYEE OPERATIONS</p>

          <h1>{applicationName}</h1>

          <p className="app-description">
            Manage employees, departments, records, and workforce information
            in one place.
          </p>
        </div>

        <span className="status-indicator">
          Development Mode
        </span>
      </header>

      <section className="welcome-card">
        <h2>Welcome to your Employee Management System</h2>

        <p>
          Your new React application is ready. We will build the login,
          dashboard, employee directory, and employee management features
          step by step.
        </p>

        <div className="setup-status">
          <span className="success-icon" aria-hidden="true">
            ✓
          </span>

          <div>
            <strong>Project initialized</strong>
            <p>React is rendering the application successfully.</p>
          </div>
        </div>
      </section>

      <footer className="app-footer">
        <p>Employee Management System · React Practice Project</p>
      </footer>
    </main>
  );
}

export default App;