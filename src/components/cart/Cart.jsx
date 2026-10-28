import CartProduct from "./CartProduct";
import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";

export default function Cart() {
  const [data, setData] = useOutletContext();

  const productsInCart = data
    .filter((product) => product.inCart)
    .map((product) => {
      return (
        <CartProduct key={product.id} productData={product} setData={setData} />
      );
    });

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartProductsContainer}>{productsInCart}</div>
    </div>
  );
}
