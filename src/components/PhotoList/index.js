import React from "react";
import photo from "../../assets/small/commercial/0.jpg";
import { useState } from "react";
import Modal from "../Modal";
const PhotoList = ({ currentCategory }) => {
	const [photos] = useState([
		{
			name: "Grocery aisle",
			category: "commercial",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Grocery booth",
			category: "commercial",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Building exterior",
			category: "commercial",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Restaurant table",
			category: "commercial",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Cafe interior",
			category: "commercial",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Cat green eyes",
			category: "portraits",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Green parrot",
			category: "portraits",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Yellow macaw",
			category: "portraits",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Pug smile",
			category: "portraits",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Pancakes",
			category: "food",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Burrito",
			category: "food",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Scallop pasta",
			category: "food",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Burger",
			category: "food",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Fruit bowl",
			category: "food",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Green river",
			category: "landscape",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Docks",
			category: "landscape",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Panoramic village by sea",
			category: "landscape",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Domestic landscape",
			category: "landscape",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
		{
			name: "Park bench",
			category: "landscape",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
		},
	]);

	const [currentPhoto, setCurrentPhoto] = useState(); //currentPhoto is the object containing image and its index

	const [isModalOpen, setIsModalOpen] = useState(false);

	function getPhotoList() {
		console.log(currentCategory);
		const photoListByCategory = photos.filter(
			(item) => item.category === currentCategory.name
		);
		console.log(photoListByCategory);
		return photoListByCategory;
	}

	function toggleModal(image, i) {
		console.log("toggleModal() called");
		console.log(image);
		setCurrentPhoto({ ...image, index: i });
		setIsModalOpen(!isModalOpen);
	}

	return (
		<div>
			{isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
			<div className="flex-row">
				{getPhotoList().map((image, i) => (
					<img
						src={require(`../../assets/small/${image.category}/${i}.jpg`)}
						alt={image.name}
						className="img-thumbnail mx-1"
						key={image.name}
						onClick={() => toggleModal(image, i)}
					/>
				))}
			</div>
		</div>
	);
};

export default PhotoList;
