import { useState } from "react";
import { addToCart } from "../../event-handlers/cartEvents";

export default function ProductCard({ product, setData }) {
  const [inputVal, setInputVal] = useState(1);

  function handleAddToCartClick(e) {
    addToCart(setData, Number(e.target.dataset.id), inputVal);
    setInputVal(1);
  }

  function handleInputChange(e) {
    if (e.target.value < 1) return;
    setInputVal(Number(e.target.value));
  }

  function handlePlusButtonClick() {
    setInputVal((prevData) => prevData + 1);
  }

  function handleMinusButtonClick() {
    if (inputVal <= 1) return;
    setInputVal((prevData) => prevData - 1);
  }
  return (
    <div className="productCard">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{`£${product.price}`}</p>
      <div className="buttonsContainer">
        <label htmlFor="cartQuantity">Quantity</label>
        <input
          name="cartQuantity"
          id="cartQuantity"
          type="number"
          value={inputVal}
          onChange={handleInputChange}
          data-id={product.id}
        />
        <button className="quantityButton" onClick={handlePlusButtonClick}>
          +
        </button>
        <button className="quantityButton" onClick={handleMinusButtonClick}>
          -
        </button>
        <button data-id={product.id} onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
