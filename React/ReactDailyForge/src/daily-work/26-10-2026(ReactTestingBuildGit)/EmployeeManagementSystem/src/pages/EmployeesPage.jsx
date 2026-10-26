import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AppNavigation from "../components/AppNavigation";
import PageHeader from "../components/PageHeader";
import LoadingState from "../components/LoadingState";
import EmployeeTable from "../components/EmployeeTable";
import Notification from "../components/Notification";

import { useEmployees } from "../hooks/useEmployees";
import {
  filterAndSortEmployees,
  getUniqueDepartments
} from "../utils/employeeListUtils";

function EmployeesPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    employees,
    loading,
    error,
    fetchEmployees,
    deleteEmployee,
    clearError
  } = useEmployees();

  // Search and filter states
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");

  // Sorting states
  const [sortBy, setSortBy] = useState("firstName");
  const [sortDirection, setSortDirection] = useState("asc");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Notification state
  const [notification, setNotification] = useState({
    type: "success",
    message: ""
  });

  // Fetch employees when the page loads
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Display a message received after adding or editing an employee
  useEffect(() => {
    const message = location.state?.message;

    if (message) {
      setNotification({
        type: "success",
        message
      });

      navigate(location.pathname, {
        replace: true,
        state: null
      });
    }
  }, [location.pathname, location.state, navigate]);

  // Get unique department names for the dropdown
  const departments = useMemo(() => {
    return getUniqueDepartments(employees);
  }, [employees]);

  // Apply search, department, status, and sorting
  const visibleEmployees = useMemo(() => {
    return filterAndSortEmployees(employees, {
      search,
      department,
      status,
      sortBy,
      sortDirection
    });
  }, [
    employees,
    search,
    department,
    status,
    sortBy,
    sortDirection
  ]);

  // Reset pagination when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, department, status, sortBy, sortDirection, pageSize]);

  // Calculate pagination values
  const totalEmployees = visibleEmployees.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalEmployees / pageSize)
  );

  // Keep the current page valid if employees are deleted
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = Math.min(
    startIndex + pageSize,
    totalEmployees
  );

  // Display only the employees belonging to the current page
  const paginatedEmployees = useMemo(() => {
    return visibleEmployees.slice(startIndex, endIndex);
  }, [visibleEmployees, startIndex, endIndex]);

  // Search handler
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  // Department filter handler
  function handleDepartmentChange(event) {
    setDepartment(event.target.value);
  }

  // Status filter handler
  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

  // Sorting handler
  function handleSortChange(event) {
    const selectedSort = event.target.value;

    if (selectedSort === sortBy) {
      setSortDirection((previousDirection) =>
        previousDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setSortBy(selectedSort);
      setSortDirection("asc");
    }
  }

  // Page-size handler
  function handlePageSizeChange(event) {
    setPageSize(Number(event.target.value));
  }

  // Navigate to a particular page
  function goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }

    setCurrentPage(pageNumber);
  }

  // Delete employee
  const handleDelete = useCallback(
    async (employee) => {
      const employeeName =
        `${employee.firstName || ""} ${employee.lastName || ""}`.trim();

      const confirmed = window.confirm(
        `Are you sure you want to delete ${employeeName || "this employee"}?`
      );

      if (!confirmed) {
        return;
      }

      try {
        clearError();
        await deleteEmployee(employee.id);

        setNotification({
          type: "success",
          message: `${employeeName || "Employee"} deleted successfully.`
        });
      } catch (deleteError) {
        setNotification({
          type: "error",
          message:
            deleteError.message || "Unable to delete the employee."
        });
      }
    },
    [clearError, deleteEmployee]
  );

  // Clear all search and filter options
  function handleClearFilters() {
    setSearch("");
    setDepartment("All");
    setStatus("All");
    setSortBy("firstName");
    setSortDirection("asc");
    setCurrentPage(1);
  }

  return (
    <main className="page-content employee-directory-page">
      <AppNavigation />

      <PageHeader
        title="Employee Directory"
        subtitle="Search, filter, sort, and manage employee records."
      />

      <Notification
        type={notification.type}
        message={notification.message}
        onClose={() =>
          setNotification({
            type: "success",
            message: ""
          })
        }
      />

      {/* Page heading and Add Employee button */}
      <section className="directory-heading">
        <div>
          <h2>All Employees</h2>

          <p>
            Manage employee information from one place.
          </p>
        </div>

        <Link
          to="/employees/new"
          className="directory-add-button"
        >
          + Add Employee
        </Link>
      </section>

      {/* Error message */}
      {error && (
        <div className="directory-error" role="alert">
          <span>{error}</span>

          <button
            type="button"
            onClick={() => fetchEmployees()}
          >
            Retry
          </button>
        </div>
      )}

      {/* Search and filter controls */}
      <section className="directory-filter-panel">
        <div className="directory-filter-field directory-search-field">
          <label htmlFor="employee-search">
            Search Employees
          </label>

          <input
            id="employee-search"
            type="search"
            placeholder="Search name, email, or employee ID..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        <div className="directory-filter-field">
          <label htmlFor="department-filter">
            Department
          </label>

          <select
            id="department-filter"
            value={department}
            onChange={handleDepartmentChange}
          >
            <option value="All">All Departments</option>

            {departments.map((departmentName) => (
              <option
                key={departmentName}
                value={departmentName}
              >
                {departmentName}
              </option>
            ))}
          </select>
        </div>

        <div className="directory-filter-field">
          <label htmlFor="status-filter">
            Employment Status
          </label>

          <select
            id="status-filter"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>

        <div className="directory-filter-field">
          <label htmlFor="employee-sort">
            Sort Employees
          </label>

          <select
            id="employee-sort"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="firstName">
              Employee Name
            </option>

            <option value="department">
              Department
            </option>

            <option value="joiningDate">
              Joining Date
            </option>
          </select>
        </div>

        <button
          type="button"
          className="directory-clear-button"
          onClick={handleClearFilters}
        >
          Clear Filters
        </button>
      </section>

      {/* Employee count and page size */}
      <section className="directory-table-toolbar">
        <div className="directory-result-count">
          {totalEmployees === 0 ? (
            <span>No employees found.</span>
          ) : (
            <span>
              Showing <strong>{startIndex + 1}</strong>–
              <strong>{endIndex}</strong> of{" "}
              <strong>{totalEmployees}</strong> employees
            </span>
          )}
        </div>

        <div className="directory-page-size">
          <label htmlFor="page-size">
            Rows per page:
          </label>

          <select
            id="page-size"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </section>

      {/* Employee table */}
      {loading ? (
        <LoadingState />
      ) : totalEmployees === 0 ? (
        <section className="directory-empty-state">
          <h3>No employees found</h3>

          <p>
            Try changing your search or filter options.
          </p>

          <button
            type="button"
            className="directory-clear-button"
            onClick={handleClearFilters}
          >
            Reset Search and Filters
          </button>
        </section>
      ) : (
        <>
          <EmployeeTable
            employees={paginatedEmployees}
            onDelete={handleDelete}
          />

          {/* Pagination controls */}
          <nav
            className="directory-pagination"
            aria-label="Employee table pagination"
          >
            <button
              type="button"
              className="pagination-button"
              onClick={() => goToPage(1)}
              disabled={safeCurrentPage === 1}
            >
              First
            </button>

            <button
              type="button"
              className="pagination-button"
              onClick={() => goToPage(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 1}
            >
              Previous
            </button>

            <div className="pagination-page-numbers">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  className={`pagination-button ${
                    safeCurrentPage === pageNumber
                      ? "pagination-button-active"
                      : ""
                  }`}
                  onClick={() => goToPage(pageNumber)}
                  aria-current={
                    safeCurrentPage === pageNumber
                      ? "page"
                      : undefined
                  }
                  aria-label={`Go to page ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="pagination-button"
              onClick={() => goToPage(safeCurrentPage + 1)}
              disabled={safeCurrentPage === totalPages}
            >
              Next
            </button>

            <button
              type="button"
              className="pagination-button"
              onClick={() => goToPage(totalPages)}
              disabled={safeCurrentPage === totalPages}
            >
              Last
            </button>
          </nav>

          <p className="directory-page-summary">
            Page {safeCurrentPage} of {totalPages}
          </p>
        </>
      )}
    </main>
  );
}

export default EmployeesPage;