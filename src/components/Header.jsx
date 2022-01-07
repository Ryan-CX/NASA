import React from "react";

import "./styles.css";
import logo from "../pic/logo.png";

const Header = () => {
	return (
		<div className="header-div">
			<img className="header-logo" src={logo} alt="NASA Logo" />
			<h1 className="title">Astronomy Photo of the Day</h1>
		</div>
	);
};

export default Header;
