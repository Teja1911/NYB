import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import AppNavigation from "../components/AppNavigation";
import PageHeader from "../components/PageHeader";
import LoadingState from "../components/LoadingState";
import StatusBadge from "../components/StatusBadge";

import { useEmployees } from "../hooks/useEmployees";

import {
  calculateDashboardStatistics,
  calculateDepartmentStatistics,
  calculatePercentage
} from "../utils/dashboardStatistics";

function DashboardPage() {
  const {
    employees,
    loading,
    error,
    fetchEmployees
  } = useEmployees();

  // Load employee records from the API.
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Calculate summary statistics.
  const statistics = useMemo(() => {
    return calculateDashboardStatistics(employees);
  }, [employees]);

  // Calculate department-wise employee counts.
  const departmentStatistics = useMemo(() => {
    return calculateDepartmentStatistics(employees);
  }, [employees]);

  const statusStatistics = [
    {
      label: "Active",
      count: statistics.activeEmployees,
      className: "dashboard-status-active"
    },
    {
      label: "Inactive",
      count: statistics.inactiveEmployees,
      className: "dashboard-status-inactive"
    },
    {
      label: "On Leave",
      count: statistics.employeesOnLeave,
      className: "dashboard-status-leave"
    }
  ];

  return (
    <main className="page-content dashboard-analytics-page">
      <AppNavigation />

      <PageHeader
        title="Employee Dashboard"
        subtitle="Overview of your employee records and workforce statistics."
      />

      <section className="dashboard-welcome">
        <div>
          <h2>Workforce Overview</h2>

          <p>
            Review employee totals, employment statuses, and
            department distribution.
          </p>
        </div>

        <Link
          to="/employees"
          className="dashboard-view-employees"
        >
          View Employee Directory
        </Link>
      </section>

      {error && (
        <section className="dashboard-error" role="alert">
          <p>{error}</p>

          <button
            type="button"
            onClick={() => fetchEmployees()}
          >
            Retry
          </button>
        </section>
      )}

      {loading ? (
        <LoadingState />
      ) : (
        <>
          {/* Summary cards */}
          <section className="dashboard-statistics-grid">
            <article className="dashboard-stat-card">
              <span className="dashboard-stat-label">
                Total Employees
              </span>

              <strong className="dashboard-stat-number">
                {statistics.totalEmployees}
              </strong>

              <span className="dashboard-stat-description">
                All employee records
              </span>
            </article>

            <article className="dashboard-stat-card dashboard-stat-active">
              <span className="dashboard-stat-label">
                Active Employees
              </span>

              <strong className="dashboard-stat-number">
                {statistics.activeEmployees}
              </strong>

              <span className="dashboard-stat-description">
                {calculatePercentage(
                  statistics.activeEmployees,
                  statistics.totalEmployees
                )}
                % of employees
              </span>
            </article>

            <article className="dashboard-stat-card dashboard-stat-inactive">
              <span className="dashboard-stat-label">
                Inactive Employees
              </span>

              <strong className="dashboard-stat-number">
                {statistics.inactiveEmployees}
              </strong>

              <span className="dashboard-stat-description">
                {calculatePercentage(
                  statistics.inactiveEmployees,
                  statistics.totalEmployees
                )}
                % of employees
              </span>
            </article>

            <article className="dashboard-stat-card dashboard-stat-leave">
              <span className="dashboard-stat-label">
                Employees on Leave
              </span>

              <strong className="dashboard-stat-number">
                {statistics.employeesOnLeave}
              </strong>

              <span className="dashboard-stat-description">
                {calculatePercentage(
                  statistics.employeesOnLeave,
                  statistics.totalEmployees
                )}
                % of employees
              </span>
            </article>
          </section>

          {/* Department statistics */}
          <section className="dashboard-panel">
            <div className="dashboard-panel-heading">
              <div>
                <h2>Department Overview</h2>

                <p>
                  Number of employees in each department.
                </p>
              </div>
            </div>

            {departmentStatistics.length === 0 ? (
              <p className="dashboard-empty-message">
                No department information is available yet.
              </p>
            ) : (
              <div className="dashboard-department-list">
                {departmentStatistics.map((item) => {
                  const percentage = calculatePercentage(
                    item.count,
                    statistics.totalEmployees
                  );

                  return (
                    <article
                      className="dashboard-department-item"
                      key={item.department}
                    >
                      <div className="dashboard-department-details">
                        <strong>{item.department}</strong>

                        <span>
                          {item.count}{" "}
                          {item.count === 1
                            ? "employee"
                            : "employees"}
                        </span>
                      </div>

                      <div
                        className="dashboard-progress-track"
                        role="progressbar"
                        aria-label={`${item.department} department employee share`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={percentage}
                      >
                        <div
                          className="dashboard-progress-fill"
                          style={{
                            width: `${percentage}%`
                          }}
                        />
                      </div>

                      <span className="dashboard-department-percentage">
                        {percentage}%
                      </span>
                    </article>
                  );
                })}
              </div>
            )}
          </section>

          {/* Employment status summary */}
          <section className="dashboard-panel">
            <div className="dashboard-panel-heading">
              <div>
                <h2>Employment Status Summary</h2>

                <p>
                  Breakdown of current employee statuses.
                </p>
              </div>
            </div>

            <div className="dashboard-status-list">
              {statusStatistics.map((item) => {
                const percentage = calculatePercentage(
                  item.count,
                  statistics.totalEmployees
                );

                return (
                  <article
                    className="dashboard-status-item"
                    key={item.label}
                  >
                    <div className="dashboard-status-item-heading">
                      <StatusBadge status={item.label} />

                      <strong>{item.count}</strong>
                    </div>

                    <div className="dashboard-status-progress-track">
                      <div
                        className={`dashboard-status-progress-fill ${item.className}`}
                        style={{
                          width: `${percentage}%`
                        }}
                      />
                    </div>

                    <span className="dashboard-status-percentage">
                      {percentage}% of all employees
                    </span>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Quick actions */}
          <section className="dashboard-panel dashboard-quick-actions">
            <h2>Quick Actions</h2>

            <div className="dashboard-action-links">
              <Link to="/employees">
                View Employees
              </Link>

              <Link to="/employees/new">
                Add New Employee
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default DashboardPage;