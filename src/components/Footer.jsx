import React from "react";
import "./styles.css";

const Footer = () => {
	return (
		<div className="footer-div">
			<div className="footer-logo-div">
				<img
					className="footer-logo"
					src={
						"https://rawcdn.githack.com/Ryan-CX/Nasa/27d185ddb8d7651c6c2d63d94bb8eae4973b3c3c/src/pic/logo.png"
					}
					alt="NASA Logo"
				/>
			</div>
			<div className="footer-contact">
				<p>National Aeronautics and Space Administration</p>

				<a href="https://www.nasa.gov/"> Visit NASA </a>
			</div>
		</div>
	);
};

export default Footer;
