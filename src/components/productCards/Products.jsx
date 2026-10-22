import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router";
export default function Products() {
  const [data, setData] = useOutletContext();
  const productCards = data.map((product) => (
    <ProductCard key={product.id} product={product} setData={setData} />
  ));

  return <div className="productCardsContainer">{productCards}</div>;
}
