import {
  minusOneQuantity,
  addOneQuantity,
} from "./../../event-handlers/cartEvents";

export default function CartQuantityButton({ setData, product, type }) {
  if (type !== "add" && type !== "minus")
    throw new Error(
      `ProductQuantityButton type must be add or minus. Instead received: ${type}`,
    );

  function handleMinusButtonClick(e) {
    if (product.quantity <= 1) return;
    minusOneQuantity(setData, Number(e.target.dataset.id));
  }

  function handleAddButtonClick(e) {
    addOneQuantity(setData, Number(e.target.dataset.id));
  }

  return (
    <button
      className="quantityButtons"
      data-id={product.id}
      onClick={type === "add" ? handleAddButtonClick : handleMinusButtonClick}
    >
      {type === "add" ? "+" : "-"}
    </button>
  );
}
