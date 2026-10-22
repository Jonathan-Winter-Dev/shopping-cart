import App from "./App";
import HomePage from "./components/home-page/home-page";
import Products from "./components/productCards/Products";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
];

export default routes;
