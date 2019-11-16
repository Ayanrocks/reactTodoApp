import { FETCH_TODOS, FETCH_BUCKETS } from "../actions/types";

const initialState = {
  todos: [],
  buckets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    case FETCH_BUCKETS:
      return { ...state, buckets: action.payload };
    default:
      return state;
  }
};
