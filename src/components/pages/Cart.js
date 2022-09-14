import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import Games from "../layout/Games";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <div className="container-cart content-wrap">
      <Heading title="Game cart" />
      <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />

      <Games />
      <div className="checkout">
        <a href="/checkout" className="checkout-button">
          Checkout
        </a>
      </div>
      <Footer />
    </div>
  );
}
