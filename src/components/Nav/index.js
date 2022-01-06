import React from "react";
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = ({
	currentCategory,
	setCurrentCategory,
	categories,
	contactSelected,
	setContactSelected,
}) => {
	function categorySelected(cat) {
		console.log(`hello ${cat.name}`);
		setCurrentCategory(cat);
	}

	useEffect(() => {
		document.title = capitalizeFirstLetter(currentCategory.name);
	}, [currentCategory]); //causes rendering of the component

	return (
		<header>
			<a data-testid="link" href="/">
				<span role="img" aria-label="camera">
					📸
				</span>
				Oh Snap!
			</a>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a
							data-testid="about"
							href="#about"
							onClick={() => setContactSelected(false)}
						>
							About Me
						</a>
					</li>
					<li className={`mx-2 ${contactSelected && "navActive"}`}>
						<span onClick={() => setContactSelected(true)}>Contact</span>
					</li>
					{categories.map((category) => (
						<li
							className={`mx-1
            ${
							category.name === currentCategory.name &&
							!contactSelected &&
							"navActive"
						}`}
							key={category.name}
						>
							<span
								onClick={() => {
									categorySelected(category);
									contactSelected(false);
								}}
							>
								{capitalizeFirstLetter(category.name)}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
export default Nav;
