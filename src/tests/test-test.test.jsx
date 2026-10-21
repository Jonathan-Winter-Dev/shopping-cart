import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./../App";

describe("App Component", () => {
  it("renders headline", () => {
    render(<App />);

    screen.debug();
    expect(screen.getByRole("heading").textContent).toMatch(/hello world/i);

    // check if App components renders headline
  });
});
