import App from "./App";
import Cart from "./components/cart/Cart";
import HomePage from "./components/home-page/home-page";
import Products from "./components/productCards/Products";

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
  },
];

export default routes;
