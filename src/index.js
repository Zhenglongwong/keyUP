import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import App from "./App";
import { InventoryContextProvider } from "./context/Inventory.js";
import { CartContextProvider } from "./context/Cart";


const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#89253e",
			light: "#FFD60A",
		},
		secondary: {
			main: "#3a6186",
		},
		background: {
			default: "#FFF",
			paper: "#000814",
		},
		text: {
			primary: "#FFF",
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<CartContextProvider>
		<InventoryContextProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</InventoryContextProvider>
	</CartContextProvider>
	// </React.StrictMode>
);
