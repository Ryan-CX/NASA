import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import ClipLoader from 'react-spinners/ClipLoader';

function NasaPhotoData() {
	const [nasaPhoto, setNasaPhoto] = useState([]);

	//set the loading status to false initially
	const [loading, setLoading] = useState(false);

	//in order to see the loading status, I intentionally set a 1 second delay to show the loading status
	//otherwise the loading will be too fast to see.
	useEffect(() => {
		//set the loading status to true
		setLoading(true);
		setTimeout(() => {
			try {
				async function getData() {
					const res = await axios.get(
						'https://api.nasa.gov/planetary/apod?api_key=eYhzAEYOjAYwGXFNdPhyNOycllNSCMzvEKMq00v1'
					);
					const data = await res.data;

					setNasaPhoto(data);
				}
				getData();
			} catch (error) {
				console.log('there was an error', error);
			}
			//set the loading status to false
			setLoading(false);
		}, 1000);
	}, []);

	//show loading status if loading
	if (loading) {
		return (
			<ClipLoader
				size={550}
				color={'#F5A623'}
				loading={loading}
				speedMultiplier={1.5}
			/>
		);
	} else {
		return (
			<div className='photo-data-container'>
				<Card
					key={nasaPhoto.id}
					date={nasaPhoto.date}
					title={nasaPhoto.title}
					desc={nasaPhoto.explanation}
					url={nasaPhoto.hdurl}
					copyright={nasaPhoto.copyright}
				/>
			</div>
		);
	}
}

export default NasaPhotoData;
