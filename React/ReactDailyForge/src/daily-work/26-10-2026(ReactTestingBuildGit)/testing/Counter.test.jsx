import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
  it("displays the initial count", () => {
    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increases the count when the button is clicked", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", { name: "Increase" })
    );

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("decreases the count when the button is clicked", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", { name: "Decrease" })
    );

    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  it("resets the count to zero", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", { name: "Increase" })
    );

    await user.click(
      screen.getByRole("button", { name: "Reset" })
    );

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});