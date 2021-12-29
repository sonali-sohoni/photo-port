import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
const About = () => {
	return (
		<section className="my-5">
			<h1 id="about"> Who Am I ?</h1>
			<img
				src={coverImage}
				className="my-2"
				style={{ width: "100%" }}
				alt="cover image"
			></img>
		</section>
	);
};

export default About;
