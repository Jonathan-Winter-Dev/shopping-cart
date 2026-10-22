export default function HeaderBar({ cartCount }) {
  return (
    <header>
      <div className="cartButtonContainer">
        <button>{cartCount}</button>
      </div>
    </header>
  );
}
