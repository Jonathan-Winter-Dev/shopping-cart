import { Link } from "react-router";
import styles from "./header.module.css";

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
          <span>Cart {cartCount}</span>
        </Link>
      </header>
    </div>
  );
}
