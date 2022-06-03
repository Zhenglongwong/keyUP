import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

const Homepage = () => {
	return (
		<>
			<Navbar />
			<h1>Homepage</h1>
			<ProductGrid category="Featured" />
		</>
	);
};

export default Homepage;
