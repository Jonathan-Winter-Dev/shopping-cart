import CartProduct from "./CartProduct";
import { useOutletContext } from "react-router";

export default function Cart() {
  const [data, setData] = useOutletContext();

  const productsInCart = data
    .filter((product) => product.inCart)
    .map((product) => {
      return (
        <CartProduct key={product.id} productData={product} setData={setData} />
      );
    });

  return <div className="cartProductsContainer">{productsInCart}</div>;
}
