import Navbar from '../components/Navbar'
import Catalogue from '../components/Catalogue';

const Accessories = () => {
	return (
		<>
			<Navbar />
			<h1>Accessories</h1>
			<Catalogue type="Accessory" />
		</>
	);
};

export default Accessories;
