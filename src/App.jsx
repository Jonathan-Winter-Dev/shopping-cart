import "./App.css";
import useProductData from "./hooks/fetchProductData";
import Loading from "./components/Loading";
import ErrorDisplay from "./components/ErrorDisplay";
import Products from "./components/productCards/Products";
import { Outlet, useParams } from "react-router";
import HomePage from "./components/home-page/home-page";

function App() {
  const { data, setData, error, loading } = useProductData();
  const { name } = useParams();
  console.log(name);

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
      <Products setData={setData} data={data} />
    </>
  );
}

export default App;
