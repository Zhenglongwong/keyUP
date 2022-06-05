import { useContext, useState, useEffect } from "react";
import Zoom from "@mui/material/Zoom";
import Grid from "@mui/material/Grid";
import { InventoryContext } from "../context/Inventory";
import ProductCard from "./ProductCard";

const ProductGrid = ({ category }) => {
	const inventory = useContext(InventoryContext);
	const [mounted, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	let products;
	if (category === "Featured") {
		products = inventory.filter((product) => product.featured === true);
	} else {
		products = inventory.filter((product) => product.type === category);
	}

	return (
		<Grid container spacing={2} sx={{ mx: "auto", maxWidth: 1100 }}>
				{products.map((product, index) => (
					<Zoom key={product.id} in={mounted} timeout={{ enter: 500, exit:0 }} style={{ transitionDelay: `${index * 250}ms` }} unmountOnExit>
						<Grid item xs={4}>
							<ProductCard {...product} />
						</Grid>
					</Zoom>
				))}
		</Grid>
	);
};

export default ProductGrid;
