import { Link } from "react-router";
import styles from "./header.module.css";
import basket from "./../../assets/basket-outline.svg";
import basketHandle from "./../../assets/basket-handle.svg";

export default function HeaderBar({ cartCount }) {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link className={styles.headerButton} to={`/`}>
          <span>Home</span>
        </Link>
        <Link className={styles.headerButton} to={`products`}>
          <span>Products</span>
        </Link>
        <Link className={styles.headerButton} to={`/cart`}>
          {/* <span>Cart {cartCount}</span> */}
          <span className={styles.basketIconContainer}>
            <img src={basket} className={styles.basketIcon} alt="basket" />
            <img
              src={basketHandle}
              className={styles.basketHandleLeft}
              aria-hidden="true"
            />
            <img
              src={basketHandle}
              className={styles.basketHandleRight}
              aria-hidden="true"
            />
          </span>
        </Link>
      </header>
    </div>
  );
}
