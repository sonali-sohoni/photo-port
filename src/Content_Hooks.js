import React from "react";
import { useState } from "react"; //import hook

const Content_Hooks = () => {
	const [name, setName] = useState("sachin");
	const [count, setCount] = useState(0);

	const handleNameChange = () => {
		const names = ["Bob", "Dave", "Sean"];
		const int = Math.floor(Math.random() * 3);
		setName(names[int]);
	};

	function handleClick1() {
		setCount(count + 1);
		console.log(count);
		setCount(count + 1);
		console.log(count);
		//setCount(count + 1);
	}

	const handleClick2 = () => {
		setCount(count + 1);
		console.log(count + "button 3");
	};

	const handleClick3 = (e) => {
		console.dir(e.target);
	};
	return (
		<main>
			<p> Hello {name}</p>

			<button onClick={handleNameChange}>butten 1</button>

			{/* Passing argument to event handler*/}
			<button onClick={handleClick1}>butten 2</button>

			{/* Passing event object to event handler*/}
			<button onClick={handleClick2}>butten 3</button>
		</main>
	);
};

export default Content_Hooks;
