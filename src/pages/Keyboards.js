import Navbar from "../components/Navbar";
import Catalogue from '../components/Catalogue';

const Keyboards = () => {
	return (
		<>
			<Navbar />
			<h1>Keyboards</h1>
			<Catalogue type="Keyboard" />
		</>
	);
};

export default Keyboards;
