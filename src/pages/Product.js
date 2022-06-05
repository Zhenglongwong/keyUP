import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar'
import ProductInfo from "../components/ProductInfo";
import { InventoryContext } from "../context/Inventory"

const Product = () => {
	const { id } = useParams();
	const [product] = useContext(InventoryContext).filter(item => item.id === id)

	return (
		<>
      <Navbar />
      <ProductInfo {...product} />
		</>
	);
};

export default Product;
