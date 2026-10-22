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
        index: true,
        element: <HomePage />,
      },
      {
        path: "mock",
        element: <MockChild />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];

export default routes;
