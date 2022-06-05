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
				<AppBar sx={{background: "#89253e"}}>
					<Toolbar>
						<Typography variant="h6" component="div">
							<Link to="/" style={{ textDecoration: 'none',  color: '#F5EBE9'  }}>KeyUP</Link>
							<Button size="large">
								<Link to="/Catalogue/Keyboards" style={{ textDecoration: 'none', color: '#F5EBE9' }}>Keyboards</Link>
							</Button>
							<Button size="large">
								<Link to="/Catalogue/Switches" style={{ textDecoration: 'none', color: '#F5EBE9'  }}>Switches</Link>
							</Button>
							<Button size="large">
								<Link to="/Catalogue/Accessories" style={{ textDecoration: 'none', color: '#F5EBE9'  }}>Accessories</Link>
							</Button>
							<Button size="large">
								<Link to="/Cart" style={{ textDecoration: 'none',  color: '#F5EBE9' }}>Cart</Link>
							</Button>
						</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
