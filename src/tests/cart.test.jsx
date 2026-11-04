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
];

const mockSetData = () => {
  return;
};

describe("Cart", () => {
  it("should render the page", () => {
    render(
      <MockRouterContext
        context={[mockData, mockSetData]}
        children={<Cart />}
      />,
    );
    screen.debug();
  });
});
