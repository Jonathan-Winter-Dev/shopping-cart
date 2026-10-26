import useProductData from "./hooks/fetchProductData";
import Loading from "./components/Loading";
import ErrorDisplay from "./components/ErrorDisplay";
import { Outlet } from "react-router";
import HeaderBar from "./components/header/Header";

function App() {
  const { data, setData, error, loading } = useProductData();

  if (error) return <ErrorDisplay errorMessage={error} />;
  if (loading) return <Loading />;

  const cartCount = data.reduce((acc, curr) => {
    if (curr.inCart) {
      acc += curr.quantity;
    }
    return acc;
  }, 0);

  return (
    <>
      <HeaderBar cartCount={cartCount} />
      <Outlet context={[data, setData]} />
    </>
  );
}

export default App;
