import React from "react";
import Paper from "@mui/material/Paper";

const CartTotal = React.forwardRef((props, ref) => {
	return (
    <div ref={ref}>
			<Paper
				elevation={1}
				sx={{
					display: "flex",
					justifyContent: "center",
					width: "10em",
					background: "rgba(255,255,255,.1)",
					backdropFilter: "blur(10px)",
					padding: ".5rem",
					borderRadius: "1rem",
					mx: "auto",
				}}
			>
				<p>Cart Total: ${props.total}</p>
			</Paper>
		</div>
	);
});

export default CartTotal;
