import "./App.css";
import useProductData from "./hooks/fetchProductData";
import ProductCard from "./components/ProductCard";
import Loading from "./components/Loading";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const { data, error, loading } = useProductData();
  console.log(data);

  if (error) return <ErrorDisplay errorMessage={error} />;
  if (loading) return <Loading />;

  const productCards = data.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <div className="productCardsContainer">{productCards}</div>;
}

export default App;
