import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import EmployeeList from "./EmployeeList";
import { getEmployees } from "./employeeApi";

vi.mock("./employeeApi", () => ({
  getEmployees: vi.fn(),
}));

describe("EmployeeList component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays the loading state", () => {
    getEmployees.mockReturnValue(new Promise(() => {}));

    render(<EmployeeList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays employees after a successful request", async () => {
    getEmployees.mockResolvedValue([
      {
        id: 1,
        name: "Ravi Kumar",
        email: "ravi@example.com",
      },
    ]);

    render(<EmployeeList />);

    // Wait until the employee's name appears.
    const employeeName = await screen.findByText("Ravi Kumar");

    expect(employeeName).toBeInTheDocument();

    // Find the employee's list item using the name element.
    const employeeItem = employeeName.closest("li");

    expect(employeeItem).not.toBeNull();

    // Check the email inside the same list item.
    expect(
      within(employeeItem).getByText("ravi@example.com", {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("displays an empty state when there are no employees", async () => {
    getEmployees.mockResolvedValue([]);

    render(<EmployeeList />);

    expect(await screen.findByText(/no employees/i)).toBeInTheDocument();
  });

  it("displays an error when the API request fails", async () => {
  getEmployees.mockRejectedValue(new Error("Failed to fetch employees"));

  render(<EmployeeList />);

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Unable to load employees."
  );
});
});