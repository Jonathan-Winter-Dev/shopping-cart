import {
  changeProductQuantity,
  removeFromCart,
  addToCart,
} from "./../../event-handlers/cartEvents";

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
    <div className="cartProductContainer">
      <img src={productData.thumbnail} alt={productData.title} />
      <p>{productData.title}</p>
      <p>{`£${productData.price}`}</p>
      <div className="cartButtons">
        <label htmlFor="cartQuantity">Quantity</label>
        <input
          type="number"
          name="cartQuantity"
          id="cartQuantity"
          value={productData.quantity}
          onChange={handleQuantityChange}
          data-id={productData.id}
        />
        <button onClick={handleProductRemove} data-id={productData.id}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
}
