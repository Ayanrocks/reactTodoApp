import React from "react";
import TodoCard from "./index";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

it("TodoCard renders correctly", () => {
  const mockTodo = {
    id: 1,
    name: "Hello Todo",
    status: "pending",
    bucket: "default"
  };
  function handleDelete() {
    console.log("delete clicked");
  }
  const tree = renderer
    .create(
      <BrowserRouter>
        <TodoCard todo={mockTodo} handleDelete={handleDelete} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
