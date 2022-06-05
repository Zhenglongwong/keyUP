import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CartItem = React.forwardRef((props, ref) => {
	const { name, quantity, image, price, total, dispatchCart, id } = {
		...props,
	};
	return (
		<div ref={ref}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					maxWidth: "50vw",
					mx: "auto",
				}}
			>
				<Paper
					elevation={1}
					sx={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						background: "rgba(255,255,255,.1)",
						backdropFilter: "blur(10px)",
						padding: "1rem",
						borderRadius: "1rem",
						my: ".5rem",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "90%",
						}}
					>
						<Box sx={{ display: "flex" }}>
							<Box sx={{ mr: "2rem" }}>
								<Link to={`/Product/${id}`}>
									<img src={image} alt={name} width="150" height="150" />
								</Link>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<p>{name}</p>
								<p>${price.toFixed(2)}</p>
							</Box>
						</Box>
						<Box>
							<TextField
								id="outlined-basic"
								label="QTY"
								variant="outlined"
								type="number"
								color="primary"
								inputProps={{ min: "1" }}
								sx={{ width: "5rem"}}
								value={quantity}
								onChange={(e) =>
									dispatchCart({
										type: "SETQUANTITY",
										payload: { name, quantity: e.target.value },
									})
								}
							/>
							<p>Total: ${total.toFixed(2)}</p>
							<Button variant="outlined" sx={{color:"white"}}
								onClick={() =>
									dispatchCart({ type: "REMOVE", payload: { name } })
								}
							>
								Remove Item
							</Button>
						</Box>
					</Box>
				</Paper>
			</Box>
		</div>
	);
});

export default CartItem;
