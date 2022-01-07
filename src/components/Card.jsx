import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import { Badge } from 'reactstrap';
import styled from 'styled-components';
import './styles.css';

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

	// to control the like button on/off, eventually if a users have their own account
	//then we can set up a database to store the users' like status. But for now we just use a state to control the like button.
	const handleClick = () => {
		if (like === false) {
			setLike(true);
		} else {
			setLike(false);
		}
	};

	return (
		<div className='photo-card'>
			{/* The main image */}
			<div className='photo-of-the-day-div'>
				<img className='photo-of-the-day' src={url} alt='APOD' />
			</div>

			{/* Title and description */}
			<div className='card-details'>
				<h2>{title} </h2>
				<p className='copyright'>
					Image Credit and Copyright: {copyright}
					<button className='like' onClick={handleClick}>
						{/* simply use a flag to control the like button status,save the status to localStorage */}
						<FontAwesomeIcon
							icon={like ? faHeartSolid : faHeartRegular}
							onClick={handleClick}
						/>
					</button>
				</p>

				<p className='card-content'>{desc} </p>
			</div>

			<Container>
				<Badge className='badge'>Date: {date} </Badge>
				<Badge className='badge'>Content and Image Credit: NASA</Badge>
			</Container>
		</div>
	);
};

export default NasaPhotoCard;
