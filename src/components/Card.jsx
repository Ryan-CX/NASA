import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import { Badge } from "reactstrap";
import styled from "styled-components";
import "./styles.css";

// use styled component to create custom css wrapper
const Container = styled.div`
	display: flex;
	width: 80%;
	justify-content: center;
	margin: auto;
	padding-bottom: 20px;
`;

const NasaPhotoCard = ({ url, title, copyright, desc, date }) => {
	const [like, setLike] = useState(false);
	const handleClick = () => {
		if (like === false) {
			setLike(true);
		} else {
			setLike(false);
		}
	};
	return (
		<div className="photo-card">
			<div className="photo-of-the-day-div">
				<img className="photo-of-the-day" src={url} alt="APOD" />
			</div>

			<div className="card-details">
				<h2>{title} </h2>
				<p className="copyright">
					Image Credit and Copyright: {copyright}
				</p>

				<p className="card-content">{desc} </p>
			</div>
			<Container>
				<Badge className="badge-date" color="dark">
					Date: {date}{" "}
				</Badge>
				<Badge className="badge-credit" color="dark">
					Content and Image Credit: NASA
				</Badge>

				<button className="badge-credit" onClick={handleClick}>
					{/* simply use a flag to control the like button status */}
					{like === true ? (
						<FontAwesomeIcon icon={faHeartSolid}></FontAwesomeIcon>
					) : (
						<FontAwesomeIcon
							icon={faHeartRegular}></FontAwesomeIcon>
					)}
				</button>
			</Container>
		</div>
	);
};

export default NasaPhotoCard;
