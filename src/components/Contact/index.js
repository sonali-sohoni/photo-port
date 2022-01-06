import React from "react";
import { useState } from "react";
const Contact = () => {
	const [formState, setFormState] = useState({
		//destructure the array
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formState; //destructure the object

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
  }

	return (
		<section>
			<h1>Contact me</h1>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name"> Name : </label>
					<input
						type="text"
						id="name"
						name="name"
						defaultValue={name}
						onChange={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="email">Email :</label>
					<input
						type="email"
						id="email"
						name="email"
						defaultValue={email}
						onChange={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						defaultValue={message}
						rows="5"
						onChange={handleChange}
					></textarea>
				</div>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default Contact;
