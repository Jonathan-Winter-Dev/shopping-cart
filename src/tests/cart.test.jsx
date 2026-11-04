import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Cart from "./../components/cart/Cart.jsx";
import MockRouterContext from "./MockRouterContext.jsx";

const mockData = [
  {
    title: "Mock Title 1",
    price: 1,
    inCart: true,
    quantity: 1,
    // test image
    images: ["./../assets/visa.svg"],
  },
  {
    title: "Mock Title 2",
    price: 2,
    inCart: true,
    quantity: 2,
    // test image
    images: ["./../assets/visa.svg"],
  },
  {
    title: "Mock Title 3",
    price: 3,
    inCart: true,
    quantity: 3,
    // test image
    images: ["./../assets/visa.svg"],
  },
  {
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
});
