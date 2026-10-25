import { minusOneQuantity, addOneQuantity } from "./../../cartEvents";

export default function ProductQuantityButton({ setData, product, type }) {
  if (type !== "add" || type !== "minus")
    throw new Error("ProductQuantityButton type must be add or minus");

  function handleMinusButtonClick() {
    if (product.quantity <= 1) return;
    minusOneQuantity(setData, product.id);
  }

  function handleAddButtonClick() {
    addOneQuantity(setData, product.id);
  }

  return (
    <button
      onClick={type === "add" ? handleAddButtonClick : handleMinusButtonClick}
    >
      {type === "add" ? "+" : "-"}
    </button>
  );
}
