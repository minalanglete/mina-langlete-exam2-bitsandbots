import Heading from "../layout/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FormCheckout from "../layout/FormCheckout";
import Footer from "../layout/Footer";

export default function Checkout() {
  return (
    <div className="container-checkout content-wrap">
      <Heading title="Checkout" />
      <div className="container-checkout-card">
        <FontAwesomeIcon icon={faCartShopping} className="icon-checkout" />

        <p className="checkout-incart">Games in cart</p>
        <FormCheckout />
      </div>
      <Footer />
    </div>
  );
}
