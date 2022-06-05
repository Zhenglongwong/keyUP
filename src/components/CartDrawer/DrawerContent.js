import { useContext } from "react";
import Box from "@mui/material/Box";

import { CartContext } from "../../context/Cart";
import DrawerItem from "./DrawerItem"

const CartDrawerContent = () => {
  const { cart, totals, dispatchCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <h2> Cart </h2>
        <p>Your cart is empty.</p>
      </Box>
    )
  }

	return (
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h2>Cart</h2>
      {cart.map((item) => <DrawerItem key={item.id} {...item} total={totals.get(item.name)} dispatchCart={dispatchCart}/>)}
    </Box>
	);
};

export default CartDrawerContent;
