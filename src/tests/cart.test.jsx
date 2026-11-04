import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Cart from "./../components/cart/Cart.jsx";
import MockRouterContext from "./MockRouterContext.jsx";
import React from "react";

const mockData = [
  {
    id: 1,
    title: "Mock Title 1",
    price: 1,
    inCart: true,
    quantity: 1,
    // test image
    images: ["./../assets/visa.svg"],
  },
  {
    id: 2,
    title: "Mock Title 2",
    price: 2,
    inCart: true,
    quantity: 2,
    // test image
    images: ["./../assets/visa.svg"],
  },
  {
    id: 3,
    title: "Mock Title 3",
    price: 3,
    inCart: true,
    quantity: 3,
    // test image
    images: ["./../assets/visa.svg"],
  },
  {
    if: 4,
    title: "Mock Title 4",
    price: 4,
    inCart: false,
    quantity: 4,
    // test image
    images: ["./../assets/visa.svg"],
  },
];

const setMockData = () => {
  return;
};

function MockParent() {
  const [data, setData] = React.useState(mockData);

  return <MockRouterContext context={[data, setData]} children={<Cart />} />;
}

describe("Cart", () => {
  it("should render the all products that are in the cart", () => {
    render(
      <MockRouterContext
        context={[mockData, setMockData]}
        children={<Cart />}
      />,
    );

    for (let i = 1; i < 3; i++) {
      expect(screen.getByText(`Mock Title ${i}`)).toBeInTheDocument();
    }
  });

  it("should render the correct price subtotal of all products", () => {
    render(
      <MockRouterContext
        context={[mockData, setMockData]}
        children={<Cart />}
      />,
    );

    const priceOfProducts = mockData.reduce((acc, item) => {
      if (item.inCart) acc += item.quantity * item.price;
      return acc;
    }, 0);

    expect(
      screen.getByText(`Subtotal: £${Number(priceOfProducts).toFixed(2)}`),
    ).toBeInTheDocument();
  });

  it("should update subtotal when a quantity of a product changes", async () => {
    render(<MockParent />);
    const user = userEvent.setup();
    const addButtons = screen.getAllByRole("button", { name: "+" });

    expect(screen.getByText(`Subtotal: £14.00`)).toBeInTheDocument();

    await user.click(addButtons[0]);

    expect(screen.getByText(`Subtotal: £15.00`)).toBeInTheDocument();
  });

  it("should cart when an item is removed", async () => {
    render(<MockParent />);
    const user = userEvent.setup();
    const removeFromCartButtons = screen.getAllByRole("button", {
      name: "Remove from cart",
    });
    const firstProductTitle = screen.getByText("Mock Title 1");

    expect(firstProductTitle).toBeInTheDocument();
    expect(screen.getByText(`Subtotal: £14.00`)).toBeInTheDocument();

    await user.click(removeFromCartButtons[0]);

    expect(firstProductTitle).not.toBeInTheDocument();
    expect(screen.getByText(`Subtotal: £13.00`)).toBeInTheDocument();
  });
});
