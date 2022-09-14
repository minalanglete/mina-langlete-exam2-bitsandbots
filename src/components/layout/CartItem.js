function CartItem(event) {
  function getCartItems() {
    const cartItems = localStorage.getItem("product");

    if (cartItems === null) {
      return [];
    } else {
      return JSON.parse(cartItems);
    }
  }

  const id = event.target.dataset.id;
  const name = event.target.dataset.name;

  const curretCart = getCartItems;
}

export default CartItem;
