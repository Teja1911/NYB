import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("displays the name received through props", () => {
    render(<Greeting name="Ravi" />);

    const heading = screen.getByRole("heading", {
      name: "Hello, Ravi!",
    });

    expect(heading).toBeInTheDocument();
  });

  it("displays the welcome message", () => {
    render(<Greeting name="Ravi" />);

    expect(
      screen.getByText("Welcome to React testing practice.")
    ).toBeInTheDocument();
  });
});