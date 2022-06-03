import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import InventoryContextProvider from "./context/Inventory";
import { CartContextProvider } from "./context/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		<CartContextProvider>
			<InventoryContextProvider>
				<App />
			</InventoryContextProvider>
		</CartContextProvider>
	// </React.StrictMode>
);
