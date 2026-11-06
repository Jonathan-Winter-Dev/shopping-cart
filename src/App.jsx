import useProductData from "./hooks/fetchProductData";
import Loading from "./components/loading/Loading";
import ErrorDisplay from "./components/error/ErrorDisplay";
import { Outlet } from "react-router";
import HeaderBar from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const { data, setData, error, loading } = useProductData();

  if (error)
    return (
      <>
        <HeaderBar />
        <ErrorDisplay errorMessage={error} />
        <Footer />
      </>
    );
  if (loading)
    return (
      <>
        <HeaderBar /> <Loading /> <Footer />
      </>
    );

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
      <Footer />
    </>
  );
}

export default App;
