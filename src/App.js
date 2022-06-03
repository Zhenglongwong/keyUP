import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Accessories from "./pages/Accessories";
import Keyboards from "./pages/Keyboards";
import Switches from "./pages/Switches";
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Accessories" element={<Accessories />} />
					<Route path="/Switches" element={<Switches />} />
					<Route path="/Keyboards" element={<Keyboards />} />
					<Route path="/Product/:id" element={<Product />} />
					<Route path="/Cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
