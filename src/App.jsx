import "./App.css";
import useProductData from "./hooks/fetchProductData";
import ProductCard from "./components/ProductCard";
import Loading from "./components/Loading";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const { data, setData, error, loading } = useProductData();

  if (error) return <ErrorDisplay errorMessage={error} />;
  if (loading) return <Loading />;

  const inCart = data.filter((item) => item.inCart);

  function addToCart(id) {
    setData(
      data.map((item) => {
        if (id === item.id) {
          console.log(id, item.id);
          return { ...item, inCart: true };
        } else {
          return item;
        }
      }),
    );
  }

  const productCards = data.map((product) => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
  ));

  return (
    <>
      <header>{inCart.length ?? 0}</header>
      <div className="productCardsContainer">{productCards}</div>
    </>
  );
}

export default App;
