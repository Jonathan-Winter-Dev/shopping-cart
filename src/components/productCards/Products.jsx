import { useOutletContext } from "react-router";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

export default function Products() {
  const [data, setData] = useOutletContext();

  const productCards = data.map((product) => (
    <ProductCard key={product.id} product={product} setData={setData} />
  ));

  return <div className={styles.productCardsContainer}>{productCards}</div>;
}
