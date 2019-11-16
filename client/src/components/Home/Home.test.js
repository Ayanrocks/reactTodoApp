import React from "react";
import Home from "./index";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../../reducers";

it("Home renders correctly", () => {
  const mockStore = createStore(reducers, {}, applyMiddleware(reduxThunk));
  const tree = renderer
    .create(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
