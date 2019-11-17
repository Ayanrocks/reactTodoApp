import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import renderer from "react-test-renderer";

it("App renders correctly", () => {
  const mockStore = createStore(reducers, {}, applyMiddleware(reduxThunk));
  const tree = renderer
    .create(
      <Provider store={mockStore}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
