
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactTestingConcepts from "../ReactTestingConcepts";

describe("ReactTestingConcepts", () => {
  it("renders the heading", () => {
    render(<ReactTestingConcepts />);
    expect(
      screen.getByRole("heading", { name: /react testing concepts/i })
    ).toBeInTheDocument();
  });

  it("validates an empty employee name", async () => {
    const user = userEvent.setup();
    render(<ReactTestingConcepts />);

    await user.click(screen.getByRole("button", { name: /add employee/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Name is required"
    );
  });

  it("adds an employee", async () => {
    const user = userEvent.setup();
    render(<ReactTestingConcepts />);

    await user.type(
      screen.getByLabelText(/employee name/i),
      "Ananya Rao"
    );
    await user.click(screen.getByRole("button", { name: /add employee/i }));

    // expect(screen.getByText("Hello, Ananya Rao")).not.toBeInTheDocument();
    expect(screen.getByText("Total employees: 1")).toBeInTheDocument();
    expect(screen.getByText("Ananya Rao")).toBeInTheDocument();
  });

  it("toggles conditional API content", async () => {
    const user = userEvent.setup();
    render(<ReactTestingConcepts />);

    await user.click(screen.getByRole("button", { name: /show api/i }));
    expect(screen.getByText(/loading users/i)).toBeInTheDocument();
  });
});
