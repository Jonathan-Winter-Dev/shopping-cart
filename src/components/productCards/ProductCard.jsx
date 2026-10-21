import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [inputVal, setInputVal] = useState(1);
  function handleAddToCartClick(e) {
    addToCart(Number(e.target.dataset.id), inputVal);
    setInputVal(1);
  }

  function handleQuantityChange(e) {
    if (e.target.value < 1) return;
    setInputVal(Number(e.target.value));
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
          onChange={handleQuantityChange}
          data-id={product.id}
        />
        <button data-id={product.id} onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
