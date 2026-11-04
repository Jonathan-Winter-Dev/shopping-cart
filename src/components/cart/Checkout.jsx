export default function Checkout({ totalPrice }) {
  const price = {
    // prices are calculated based on 20% VAT
    subtotal: Number(totalPrice * 0.8).toFixed(2),
    vat: Number(totalPrice * 0.2).toFixed(2),
    totalPrice: totalPrice,
  };

  return (
    <>
      <h1>{price.totalPrice}</h1>
      <h1>{price.subtotal}</h1>
      <h1>{price.vat}</h1>
    </>
  );
}
