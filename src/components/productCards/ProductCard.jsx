import { useState } from "react";
import { addToCart } from "../../event-handlers/cartEvents";
import styles from "./ProductCard.module.css";

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
    <div className={styles.productCard}>
      <div className={styles.productCardImgContainer}>
        <img
          src={product.images[0]}
          alt={product.title}
          className={styles.productImg}
        />
      </div>
      <div className={styles.productInfoContainer}>
        <h2>{product.title}</h2>
        <p className={styles.productCardPrice}>{`£${product.price}`}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.quantityButtonsContainer}>
          <label htmlFor="cartQuantity">Quantity</label>
          <input
            name="cartQuantity"
            id="cartQuantity"
            type="number"
            value={inputVal}
            onChange={handleInputChange}
            data-id={product.id}
          />
          <button
            className={styles.quantityButton}
            onClick={handlePlusButtonClick}
          >
            +
          </button>
          <button
            className={styles.quantityButton}
            onClick={handleMinusButtonClick}
          >
            -
          </button>
        </div>

        <button
          className={styles.addToCartBtn}
          data-id={product.id}
          onClick={handleAddToCartClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
