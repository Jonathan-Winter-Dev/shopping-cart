import App from "./App";
import HomePage from "./components/home-page/home-page";
import Products from "./components/productCards/Products";
import MockChild from "./mockChild";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "mock",
        element: <MockChild />,
      },
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
