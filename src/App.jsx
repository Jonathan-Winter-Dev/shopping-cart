import "./App.css";
import useProductData from "./hooks/fetchProductData";
import Loading from "./components/Loading";
import ErrorDisplay from "./components/ErrorDisplay";
import { Outlet } from "react-router";
import HeaderBar from "./components/header/header";

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

  return (
    <>
      <HeaderBar cartCount={inCart} />
      <Outlet context={[data, setData]} />
    </>
  );
}

export default App;
