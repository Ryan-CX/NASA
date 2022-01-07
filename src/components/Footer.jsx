import React from "react";
import "./styles.css";
import logo from "../pic/logo.png";

const Footer = () => {
	return (
		<div className="footer-div">
			<div className="footer-logo-div">
				<img className="footer-logo" src={logo} alt="NASA Logo" />
			</div>
			<div className="footer-contact">
				<p>National Aeronautics and Space Administration</p>

				<a href="https://www.nasa.gov/"> Visit NASA </a>
			</div>
		</div>
	);
};

export default Footer;
