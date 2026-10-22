import { Link } from "react-router";
export default function HeaderBar({ cartCount }) {
  return (
    <header>
      <Link to={`/`}>Home</Link>
      <Link to={`products`}>Products: {cartCount}</Link>
    </header>
  );
}
