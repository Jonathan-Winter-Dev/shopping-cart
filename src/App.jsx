import "./App.css";
import useProductData from "./hooks/fetchProductData";
import ProductCard from "./components/ProductCard";
import Loading from "./components/Loading";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const { data, setData, error, loading } = useProductData();

  if (error) return <ErrorDisplay errorMessage={error} />;
  if (loading) return <Loading />;

  const inCart = data.reduce((acc, curr) => {
    if (curr.inCart) {
      acc += curr.quantity;
    }
    return acc;
  }, 0);

  function addToCart(id, quantityToAdd) {
    setData(
      data.map((item) => {
        if (id === item.id) {
          const newQuantity = quantityToAdd + item.quantity;
          return { ...item, inCart: true, quantity: newQuantity };
        } else {
          return item;
        }
      }),
    );
  }

  function updateQuantity(id, newQuantity) {
    setData(
      data.map((item) => {
        if (id === item.id) {
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      }),
    );
  }

  const productCards = data.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
    />
  ));

  return (
    <>
      <header>{inCart ?? 0}</header>
      <div className="productCardsContainer">{productCards}</div>
    </>
  );
}

export default App;
