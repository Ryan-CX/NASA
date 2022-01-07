import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
// import NasaPhotoBottomNav from "./NasaPhotoBottomNav";

function NasaPhotoData() {
	const [nasaPhoto, setNasaPhoto] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=eYhzAEYOjAYwGXFNdPhyNOycllNSCMzvEKMq00v1"
			)
			.then((response) => {
				setNasaPhoto(response.data);
			})
			.catch((error) => {
				console.log("there was an error", error);
			});
	}, []);

	return (
		<div className="photo-data-container">
			<Card
				key={nasaPhoto.id}
				date={nasaPhoto.date}
				title={nasaPhoto.title}
				desc={nasaPhoto.explanation}
				url={nasaPhoto.hdurl}
				copyright={nasaPhoto.copyright}
			/>
			{/* <NasaPhotoBottomNav hdUrl={nasaPhoto.hdurl}/> */}
		</div>
	);
}

export default NasaPhotoData;
