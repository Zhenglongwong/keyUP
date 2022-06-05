import { useContext } from "react";
import Grid from "@mui/material/Grid";
import {CartContext} from '../context/Cart'


const ProductInfo = ({ name, brand, price, image, description, id }) => {
	const { dispatchCart } = useContext(CartContext);

	return (
			<Grid container sx={{mx:'auto', maxWidth: 1400}}>
				<Grid item xs={6}>
					<img src={image} alt={name} />
				</Grid>
				<Grid item xs={6} sx={{alignText: 'left'}}>
					<h1> {name} </h1>
					<h2>by {brand}</h2>
					<p>Price: ${price?.toFixed(2)}</p>
					<p>{description}</p>
					<button onClick={()=>dispatchCart({type:"ADD", payload: {name, price, image, id, quantity: 1}})}>Add to cart</button>
				</Grid>
			</Grid>
	);
};

export default ProductInfo;
