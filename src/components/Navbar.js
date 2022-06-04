import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";



function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function HideAppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar sx={{background: "#FFD60A"}}>
					<Toolbar>
						<Typography variant="h6" component="div">
							<Link to="/" style={{ textDecoration: 'none' }}>KeyUP</Link>
							<Button size="large">
								<Link to="/Catalogue/Keyboards" style={{ textDecoration: 'none'}}>Keyboards</Link>
							</Button>
							<Button size="large">
								<Link to="/Catalogue/Switches" style={{ textDecoration: 'none' }}>Switches</Link>
							</Button>
							<Button size="large">
								<Link to="/Catalogue/Accessories" style={{ textDecoration: 'none' }}>Accessories</Link>
							</Button>
							<Button size="large">
								<Link to="/Cart" style={{ textDecoration: 'none' }}>Cart</Link>
							</Button>
						</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
