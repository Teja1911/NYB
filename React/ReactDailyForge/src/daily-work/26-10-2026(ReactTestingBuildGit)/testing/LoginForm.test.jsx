import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm component", () => {
  it("shows an error when fields are empty", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please enter both email and password."
    );
  });

  it("shows an error for a short password", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByLabelText("Email"),
      "ravi@example.com"
    );

    await user.type(
      screen.getByLabelText("Password"),
      "123"
    );

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Password must contain at least 6 characters."
    );
  });

  it("submits valid form data", async () => {
    const user = userEvent.setup();
    const onLogin = vi.fn();

    render(<LoginForm onLogin={onLogin} />);

    await user.type(
      screen.getByLabelText("Email"),
      "ravi@example.com"
    );

    await user.type(
      screen.getByLabelText("Password"),
      "secret123"
    );

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "Login form submitted successfully."
    );

    expect(onLogin).toHaveBeenCalledWith({
      email: "ravi@example.com",
      password: "secret123",
    });
  });
});