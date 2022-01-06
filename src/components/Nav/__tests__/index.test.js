import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
	{ name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe("Nav Component", () => {
	it("renders", () => {
		render(
			<Nav
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={mockCurrentCategory}
			/>
		);
	});

	it("Snapshot test for Nav component", () => {
		const { asFragment } = render(
			<Nav
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={mockCurrentCategory}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe("camera emoji is visible", () => {
	it("inserts emoji in h2", () => {
		const { getByLabelText } = render(
			<Nav
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={mockCurrentCategory}
			/>
		);

		expect(getByLabelText("camera")).toHaveTextContent("📸");
	});
});

describe("Links are visible", () => {
	it("insert text into links", () => {
		//get the function using render(<component/>)
		const { getByTestId } = render(
			<Nav
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={mockCurrentCategory}
			/>
		
		
			);
		expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
		expect(getByTestId("about")).toHaveTextContent("About Me");
	});
});
