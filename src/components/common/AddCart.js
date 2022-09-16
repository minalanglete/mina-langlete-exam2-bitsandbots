import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

function AddCart() {
  const [addtocart, addedtocart] = React.useState(
    JSON.parse(localStorage.getItem("addtocart")) || false
  );

  const handleToggle = () => {
    localStorage.setItem("addtocart", JSON.stringify(!addtocart));

    addedtocart(!addtocart);
  };
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} className="games-icon" onClick={handleToggle} />
      {addtocart && <div>added</div>};
    </div>
  );
}

export default AddCart;
