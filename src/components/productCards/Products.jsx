import ProductCard from "./ProductCard";
export default function Products({ data, setData }) {
  const productCards = data.map((product) => (
    <ProductCard key={product.id} product={product} setData={setData} />
  ));

  return <div className="productCardsContainer">{productCards}</div>;
}
