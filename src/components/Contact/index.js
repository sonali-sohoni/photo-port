import React from "react";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [formState, setFormState] = useState({
		//destructure the array
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formState; //destructure the object

	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);
			if (!isValid) {
				setErrorMessage("Your email is invalid");
			} else setErrorMessage("");
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}
		console.log("errorMessage", errorMessage);
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	};

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
						onBlur={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="email">Email :</label>
					<input
						type="email"
						id="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						defaultValue={message}
						rows="5"
						onBlur={handleChange}
					></textarea>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default Contact;
