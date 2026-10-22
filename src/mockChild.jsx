import { useOutletContext } from "react-router";
import ProductCard from "./components/productCards/ProductCard";

export default function MockChild() {
  const [data, setData] = useOutletContext();
  const cards = data.map((item) => {
    return <p key={item.title}>{item.title}</p>;
  });
  return (
    <h3>
      Routers are making me very sad, but this is some useOutletContext: {cards}
    </h3>
  );
}
