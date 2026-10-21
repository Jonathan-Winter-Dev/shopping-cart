export default function ProductCard({ product, addToCart }) {
  function handleAddToCartClick(e) {
    addToCart(Number(e.target.dataset.id));
  }

  return (
    <div className="productCard">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{`£${product.price}`}</p>
      <div className="buttonsContainer">
        <label htmlFor="catQuantity">Quantity</label>
        <input
          name="cartQuantity"
          id="cartQuantity"
          type="number"
          value={product.quantity}
        />
        <button data-id={product.id} onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
