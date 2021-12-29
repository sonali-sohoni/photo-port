import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav Component", () => {
	it("renders", () => {
		render(<Nav />);
	});

	it("Snapshot test for Nav component", () => {
		const { asFragment } = render(<Nav />);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe("camera emoji is visible", () => {
	it("inserts emoji in h2", () => {
		const { getByLabelText } = render(<Nav />);

		expect(getByLabelText("camera")).toHaveTextContent("📸");
	});
});

describe("Links are visible", () => {
	it("insert text into links", () => {
		//get the function using render(<component/>)
		const { getByTestId } = render(<Nav />);
		expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
		expect(getByTestId("about")).toHaveTextContent("About Me");
	});
});
