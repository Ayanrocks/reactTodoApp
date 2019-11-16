import React from "react";
import Navbar from "./index";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

it("Navbar renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
