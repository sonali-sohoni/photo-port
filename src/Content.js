import React from "react";
import { useState } from "react"; //import hook
import { FaTrash } from "react-icons/fa";

const Content_Hooks = () => {
	const [items, setItems] = useState([
		//our state represents current set of values in array
		{
			id: "1",
			item: "item 1",
			checked: false,
		},
		{
			id: "2",
			item: "item 2",
			checked: true,
		},
		{
			id: "3",
			item: "item 3",
			checked: true,
		},
	]);
	const [count, setCount] = useState(0);

	function updateCount() {
		let updatedCount = count;
		setInterval(function () {
			updatedCount += 1;
			console.log(updatedCount);
			setCount(updatedCount);
		}, 1000);
	}

	return (
		<main>
			{count}
			{/* {items.map((item) => (
				<li className="item">
					<input type="checkbox" checked={item.checked} />
					<label> {item.item} </label>
					<FaTrash role="button" tabIndex="0" />
				</li>
			))} */}
			<button onClick = {updateCount}>Click me</button>
		</main>
	);
};

export default Content_Hooks;
