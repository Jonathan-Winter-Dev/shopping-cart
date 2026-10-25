import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import CartProduct from "../components/cart/CartProduct";

const mockProductDataInCart = {
  id: 1,
  title: "Mock Title 1",
  price: "3.99",
  inCart: true,
  quantity: 3,
};

const mockProductDataInCartTwo = {
  id: 2,
  title: "Mock Title 2",
  price: "4.99",
  inCart: false,
  quantity: 4,
};

function MockParent() {
  const [data, setData] = React.useState([
    mockProductDataInCart,
    mockProductDataInCartTwo,
  ]);

  const productsInCart = data.filter((product) => product.inCart);

  if (productsInCart.length) {
    return <CartProduct productData={productsInCart[0]} setData={setData} />;
  }
}

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

  it("input should be able to change the quantity of products", async () => {
    render(<MockParent />);

    const input = screen.getByRole("spinbutton", { name: "Quantity" });
    const user = userEvent.setup();

    expect(Number(input.value)).toBe(3);

    await user.type(input, "2");

    expect(Number(input.value)).toBe(32);
  });

  it("should be able to remove from cart", async () => {
    render(<MockParent />);

    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: "Remove From Cart" });
    const title = screen.getByText("Mock Title 1");

    expect(title).toBeInTheDocument();

    await user.click(button);

    expect(title).not.toBeInTheDocument();
  });
});
