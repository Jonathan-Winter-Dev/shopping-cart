import "./App.css";
import useProductData from "./hooks/fetchProductData";
import ProductCard from "./components/ProductCard";

function App() {
  const { data, error, loading } = useProductData();

  const productCards = data.map((product) => <ProductCard product={product} />);

  return <div className="productCardsContainer">{productCards}</div>;
}

export default App;
