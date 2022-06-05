//payload will be an object with product details like (name, quantity, price)
//take out actions as constants

const cartReducer = (state, action) => {
  //not sure if this is good or neccessary
  const findItemIndex = (inCart, cart, itemName) => {
    if (inCart) {
      let item = cart.find((product) => product.name === itemName);
      return cart.indexOf(item);
    } else {
      return null;
    }
  };

  const itemName = action.payload.name;
  const currentCart = [...state];
  const itemInCart =
    state.find((product) => (product.name === itemName)) !== undefined;
  const itemIndex = findItemIndex(itemInCart, currentCart, itemName);

  switch (action.type) {
    case "ADD":
      if (itemInCart) {
        currentCart[itemIndex].quantity ++;
        return currentCart;
      } else {
        return currentCart.concat(action.payload);
      }
    case "REMOVE":      
      return currentCart.filter((_, index) => index !== itemIndex);
    case "SETQUANTITY":
      currentCart[itemIndex].quantity = action.payload.quantity;
      return currentCart;
    default:
      return state;

  }
};

export default cartReducer