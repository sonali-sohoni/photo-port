import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../../About";

afterEach(cleanup);

//TEST CASE FOR ABOUT
describe("About Component", () => {
	it("renders", () => {
		render(<About />);
	});

	it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
	});
});
