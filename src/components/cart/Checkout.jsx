import style from "./Cart.module.css";
import visa from "./../../assets/visa.svg";
import applePay from "./../../assets/apple-pay.svg";
import americanExpress from "./../../assets/american-express.svg";
import googlePay from "./../../assets/google-pay.svg";
import klarna from "./../../assets/klarna.svg";
import masterCard from "./../../assets/mastercard.svg";

const PRICE_OF_DELIVERY = 4;
const paymentTypes = [
  { img: visa, alt: "Visa" },
  { img: applePay, alt: "Apple Pay" },
  { img: americanExpress, alt: "American Express" },
  { img: googlePay, alt: "Google Pay" },
  { img: klarna, alt: "Klarna" },
  { img: masterCard, alt: "Master Card" },
];

const paymentTypesImgs = paymentTypes.map((item) => {
  return <img src={item.img} alt={item.alt} />;
});

export default function Checkout({ priceOfProducts }) {
  const price = {
    subtotal: priceOfProducts,
    delivery: PRICE_OF_DELIVERY,
    totalPrice: priceOfProducts + PRICE_OF_DELIVERY,
  };

  return (
    <div className={style.checkoutContainer}>
      <div className={style.checkoutSummary}>
        <p>Members enjoy free shipping over £50. </p>
        <div className={style.checkoutPriceContainer}>
          <p>Subtotal: £{Number(price.subtotal).toFixed(2)}</p>
          <p>Delivery: £{price.delivery}</p>
        </div>
        <p>
          <b>Total</b> inc taxes: £{Number(price.totalPrice).toFixed(2)}
        </p>
      </div>
      <button disabled className={style.checkoutButton}>
        Secure Checkout
      </button>
      <div className={style.paymentTypesContainer}>{paymentTypesImgs}</div>
    </div>
  );
}
