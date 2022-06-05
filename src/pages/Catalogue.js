import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";

const Catalogue = () => {
	const { category } = useParams();
	return (
		<>
			<Navbar />
			<h2>{category}</h2>
			<ProductGrid category={category} />
		</>
	);
};

export default Catalogue;
