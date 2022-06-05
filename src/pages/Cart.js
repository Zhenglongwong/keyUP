import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slide from '@mui/material/Slide';
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/Cart";
import CartTotal from "../components/CartTotal";

const Cart = () => {
	const { cart, totals, dispatchCart } = useContext(CartContext);
	const [mounted, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	return (
		<Box
			sx={{
				height: "200vh",
				width: "100vw",
				backgroundImage: `url(${"/checkout.jpg"})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Navbar />
			<h2>Cart</h2>
			<CartTotal total={totals.get("grandTotal").toFixed(2)} />
			{cart.map((item,index) => (
				<Slide key={item.name} in={mounted} direction="up" timeout={1000} style={{ transitionDelay: `${index * 500}ms` }} mountOnEnter unmountOnExit>
					<CartItem
						{...item}
						total={totals.get(item.name)}
						dispatchCart={dispatchCart}
					/>
				</Slide>
			))}
		</Box>
	);
};

export default Cart;
