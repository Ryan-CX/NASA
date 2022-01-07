import React from "react";

import "./styles.css";

const Header = () => {
	return (
		<div className="header-div">
			<img
				className="header-logo"
				src={
					"https://rawcdn.githack.com/Ryan-CX/Nasa/27d185ddb8d7651c6c2d63d94bb8eae4973b3c3c/src/pic/logo.png"
				}
				alt="NASA Logo"
			/>
			<h1 className="title">Astronomy Photo of the Day</h1>
		</div>
	);
};

export default Header;
