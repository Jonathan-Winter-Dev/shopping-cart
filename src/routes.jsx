import App from "./App";
import Cart from "./components/cart/Cart";
import HomePage from "./components/home-page/HomePage";
import Products from "./components/productCards/Products";
import ErrorDisplay from "./components/error/ErrorDisplay";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorDisplay />,
  },
];

export default routes;
