import Navbar from "../components/Navbar";
import Catalogue from '../components/Catalogue'

const Homepage = () => {
	return (
		<>
			<Navbar />
			<h1>Homepage</h1>
			<Catalogue type="Featured"/>
		</>
	);
};

export default Homepage;
