import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Navbar = () => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Link to="/Homepage">KeyUP</Link>
				<Link to="/Keyboards">Keyboards</Link>
				<Link to="/Switches">Switches</Link>
				<Link to="/Accessories">Accessories</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;



