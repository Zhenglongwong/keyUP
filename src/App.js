import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Catalogue from "./pages/Catalogue"
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Catalogue/:category" element={<Catalogue />}/> 
					<Route path="/Product/:id" element={<Product />} />
					<Route path="/Cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
