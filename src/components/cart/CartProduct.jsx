import {
  changeProductQuantity,
  removeFromCart,
} from "./../../event-handlers/cartEvents";
import CartQuantityButton from "./CartQuantityButtons";
import styles from "./Cart.module.css";

export default function CartProduct({ productData, setData }) {
  function handleQuantityChange(e) {
    if (Number(e.target.value) < 1) return;
    changeProductQuantity(
      setData,
      Number(e.target.dataset.id),
      Number(e.target.value),
    );
  }

  function handleProductRemove(e) {
    removeFromCart(setData, Number(e.target.dataset.id));
  }

  return (
    <div className={styles.cartProductContainer}>
      <img src={productData.thumbnail} alt={productData.title} />
      <p className={styles.productTitle}>{productData.title}</p>
      <p>{`£${productData.price}`}</p>
      <div className={styles.cartButtonsContainer}>
        <label htmlFor="cartQuantity">Quantity</label>
        <input
          type="number"
          name="cartQuantity"
          id="cartQuantity"
          value={productData.quantity}
          onChange={handleQuantityChange}
          data-id={productData.id}
        />
        <CartQuantityButton
          type="minus"
          setData={setData}
          product={productData}
        />
        <CartQuantityButton
          type="add"
          setData={setData}
          product={productData}
        />
        <button
          className={styles.removeFromCartButton}
          onClick={handleProductRemove}
          data-id={productData.id}
          aria-label="Remove from cart"
        >
          x
        </button>
      </div>
    </div>
  );
}
