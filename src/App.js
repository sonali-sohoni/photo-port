import React from "react";
import "./App.css";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Content from "./Content";
import { useState } from "react";
import Contact from "./components/Contact";

function App() {
	const [categories] = useState([
		{
			name: "commercial",
			description:
				"Photos of grocery stores, food trucks, and other commercial projects",
		},
		{ name: "portraits", description: "Portraits of people in my life" },
		{ name: "food", description: "Delicious delicacies" },
		{
			name: "landscape",
			description: "Fields, farmhouses, waterfalls, and the beauty of nature",
		},
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	const [contactSelected, setContactSelected] = useState(false);

	return (
		<div>
			<Nav
				currentCategory={currentCategory}
				setCurrentCategory={setCurrentCategory}
				categories={categories}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			/>
			<main>
				{!contactSelected ? (
					<>
						{/* React fragment*/}
						<Gallery
							currentCategory={currentCategory}
							setCurrentCategory={setCurrentCategory}
							categories={categories}
						/>
						<About />
					</>
				) : (
					<Contact />
				)}
			</main>
		</div>
	);
}

export default App;
