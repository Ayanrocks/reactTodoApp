import { FETCH_TODO } from "../actions/types";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return { ...state, todos: [action.payload] };
    default:
      return state;
  }
};
