import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";


const Gallery = ({currentCategory,setCurrentCategory,categories}) => {
	// const currentCategory = {
	// 	name: "commercial",
	// 	description:
	// 		"Photos of grocery stores, food trucks, and other commercial projects",
	// };
  return (
		<section>
		
				<h1> {capitalizeFirstLetter(currentCategory.name)}</h1>
				<p>{currentCategory.description}</p>
      <PhotoList currentCategory={currentCategory}/>
			
		</section>
	);
};

export default Gallery;
