import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const ProductCard = React.forwardRef((props, ref) => {
	const	{ name, price, brand, image, id } = {...props}
	return (
		<Card ref={ref} sx={{ maxWidth: 345, background: "rgba(0,0,0,.5)",
		backdropFilter: "blur(10px)", borderRadius: ".5rem", }} raised={true}>
			<Link to={`/Product/${id}`} style={{ textDecoration: 'none' , color: "white"}}>
				<CardActionArea>
					<CardMedia component="img" height="200" image={image} alt={name} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" col
						or="text.primary">
							{name}
						</Typography>
						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<Typography variant="body2" color="text.primary">
								by {brand}
							</Typography>
							<Typography variant="body2" color="text.primary">
								${price.toFixed(2)}
							</Typography>
						</Box>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
})

export default ProductCard