import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import NavigationPractice from "./NavigationPractice";

describe("NavigationPractice", () => {
  it("navigates to the employee page", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavigationPractice />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Navigation Home" })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("link", { name: "View Employees" })
    );

    expect(
      screen.getByRole("heading", {
        name: "Employee Navigation Page",
      })
    ).toBeInTheDocument();
  });
});