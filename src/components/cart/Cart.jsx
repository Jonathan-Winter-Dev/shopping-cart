import CartProduct from "./CartProduct";
import Checkout from "./Checkout";
import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";

export default function Cart() {
  const [data, setData] = useOutletContext();

  const productsInCartCards = data
    .filter((product) => product.inCart)
    .map((product) => {
      return (
        <CartProduct key={product.id} productData={product} setData={setData} />
      );
    });

  const priceOfProducts = data.reduce((acc, item) => {
    if (item.inCart) acc += item.quantity * item.price;
    return acc;
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartProductsContainer}>{productsInCartCards}</div>
      <Checkout priceOfProducts={priceOfProducts} />
    </div>
  );
}
