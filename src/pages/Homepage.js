import Box from "@mui/material/Box";
import Card from "@mui/material/Card"; 
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

const Homepage = () => {
	return (
		<>
			<Navbar />
			<Box sx={{  position: 'relative',
				textAlign: 'center'
			}}>
				<img
					className="headerImage"
					src="/LandingPageImage.jpg"
					alt="Header"
				/>
				<Card
					className="headerContent"
					sx={{
						position: "absolute",
						top: "15vh",
						left: "5vw",
						background: "rgba(255,255,255,.1)",
						backdropFilter: "blur(10px)",
						height: '20vh',
						padding: "1rem"
					}}
				>
					<h2>Create the custom keyboard of your dreams</h2>
					<Button sx={{margin: "1rem"}} variant="contained">Contact Consultant</Button>
					<Button sx={{margin: "1rem"}} variant="contained">Explore Products</Button>
				</Card>
			</Box>
			<h1>Homepage</h1>
			<ProductGrid category="Featured" />
		</>
	);
};

export default Homepage;
