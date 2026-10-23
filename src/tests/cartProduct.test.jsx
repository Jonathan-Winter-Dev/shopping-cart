import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CartProduct from "../components/cart/CartProduct";

const mockProductDataInCart = {
  title: "Mock Title 1",
  price: "3.99",
  inCart: true,
  quantity: 3,
};

const mockProductDataNotInCart = {
  title: "Mock Title 2",
  price: "3.99",
  inCart: false,
  quantity: 3,
};

describe("Products In Cart", () => {
  it("should render all product details if it is in the cart", () => {
    render(<CartProduct productData={mockProductDataInCart} />);

    expect(screen.getByText("Mock Title 1")).toBeInTheDocument();
    expect(screen.getByText("£3.99")).toBeInTheDocument();
  });

  it("should render an input with the correct quantity of products", () => {
    render(<CartProduct productData={mockProductDataInCart} />);

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(input).toBeInTheDocument();

    expect(Number(input.value)).toBe(3);
  });
});
