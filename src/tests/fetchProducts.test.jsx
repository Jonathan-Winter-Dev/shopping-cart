import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./../App";
import { MemoryRouter, Routes, Route } from "react-router";

window.fetch = vi.fn(() => {
  const mockResponse = {
    products: [
      {
        id: 1,
        title: "Test Title 1",
        price: 9.99,
      },
    ],
  };
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResponse),
  });
});

describe("Products Component", () => {
  it("Displays loading state correctly", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    screen.debug();
  });

  it("Displays error page when handling a response that was not ok", async () => {
    window.fetch = vi.fn(() => {
      const mockResponse = {
        products: [
          {
            id: 1,
            title: "Test Title 1",
            price: 9.99,
          },
        ],
      };
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse),
      });
    });

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    await waitForElementToBeRemoved(() => screen.getByText("Loading"));
    expect(
      screen.getByText("Oops! Something's not working."),
    ).toBeInTheDocument();
  });
});
