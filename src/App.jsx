import "./App.css";
import useProductData from "./hooks/fetchProductData";
import Loading from "./components/Loading";
import ErrorDisplay from "./components/ErrorDisplay";
import Products from "./components/productCards/Products";
import { Outlet, useParams } from "react-router";
import HomePage from "./components/home-page/home-page";

function App() {
  const { data, setData, error, loading } = useProductData();
  const name = useParams();

  if (error) return <ErrorDisplay errorMessage={error} />;
  if (loading) return <Loading />;

  const inCart = data.reduce((acc, curr) => {
    if (curr.inCart) {
      acc += curr.quantity;
    }
    return acc;
  }, 0);

  return (
    <>
      <header>{inCart ?? "this is an empty cart bit"}</header>
      {name === "products" ? (
        <Outlet context={[data, setData]} />
      ) : (
        <HomePage />
      )}
    </>
  );
}

export default App;
