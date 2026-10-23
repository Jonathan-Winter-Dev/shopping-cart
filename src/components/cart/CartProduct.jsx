import {
  changeProductQuantity,
  removeFromCart,
} from "./../../event-handlers/cartEvents";

export default function CartProduct({ productData, setData }) {
  function handleQuantityChange(e) {
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
      <p>{productData.quantity}</p>
      <div className="cartButtons">
        <label htmlFor="cartQuantity">Quantity</label>
        <input
          type="number"
          name="cartQuantity"
          id="cartQuantity"
          value={inputVal}
          onChange={handleQuantityChange}
        />
        <button onClick={handleProductRemove}>Remove From Cart</button>
      </div>
    </div>
  );
}
