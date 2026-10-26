import styles from "./homePage.module.css";
import background from "./../../assets/home-bg.jpg";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <img className={styles.background} src={background} aria-hidden="true" />
      <h1 className={styles.title}>cart</h1>
    </div>
  );
}
