import * as React from "react";
import logo from './images/logowithname.png';
import './App.css';

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
return (
	<AppBar position="static" style={{ backgroundColor: '#e86a26' }} elevation={0}>
		<Toolbar>		
            <img src={logo} className="App-logo" alt="logo" style={{ width: "30%", height: "30%" }}/>
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
		</Typography>
		<Button color="inherit">Home</Button>
        <Button color="inherit">Products</Button>
        <Button color="inherit">Merch</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">About Us</Button>
		</Toolbar>
	</AppBar>
);
}
