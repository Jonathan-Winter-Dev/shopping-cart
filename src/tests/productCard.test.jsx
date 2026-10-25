import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/productCards/ProductCard";

const mockProductData = {
  title: "Mock Title 1",
  price: 3.99,
  inCart: false,
  quantity: 1,
};

describe("Product Card", () => {
  it("should render a card with a price, title, number input and an add to cart button", () => {
    render(<ProductCard product={mockProductData} />);

    const title = screen.getByText("Mock Title 1");
    const price = screen.getByText("£3.99");
    const button = screen.getByRole("button", { name: "Add to Cart" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("handle Add to Cart button click", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<ProductCard setData={onClick} product={mockProductData} />);

    const button = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("handle input change", async () => {
    render(<ProductCard product={mockProductData} />);
    const user = userEvent.setup();
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(Number(input.value)).toBe(1);

    await user.type(input, "23");

    expect(Number(input.value)).toBe(123);
  });

  it("input does not allow minus numbers", async () => {
    render(<ProductCard product={mockProductData} />);
    const user = userEvent.setup();
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(Number(input.value)).toBe(1);

    await user.type(input, "-");

    expect(Number(input.value)).toBe(1);
  });

  it("plus button adds to input value", async () => {
    render(<ProductCard product={mockProductData} />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "+" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(Number(input.value)).toBe(1);

    await user.click(button);

    expect(Number(input.value)).toBe(2);
  });

  it("minus button minuses input value", async () => {
    render(<ProductCard product={mockProductData} />);
    const user = userEvent.setup();
    const plusButton = screen.getByRole("button", { name: "+" });
    const minusButton = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(Number(input.value)).toBe(1);

    await user.click(plusButton);

    expect(Number(input.value)).toBe(2);

    await user.click(minusButton);

    expect(Number(input.value)).toBe(1);
  });

  it("minus button does not allow input to go below 1", async () => {
    render(<ProductCard product={mockProductData} />);
    const user = userEvent.setup();
    const minusButton = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(Number(input.value)).toBe(1);

    await user.click(minusButton);

    expect(Number(input.value)).toBe(1);
  });
});
