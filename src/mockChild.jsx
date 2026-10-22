import { useOutletContext } from "react-router";

export default function MockChild() {
  const inCart = useOutletContext();
  return (
    <h3>
      Routers are making me very sad, but this is some useOutletContext:{" "}
      {inCart}
    </h3>
  );
}
