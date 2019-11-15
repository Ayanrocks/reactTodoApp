import { FETCH_TODOS } from "./types";
import axios from "axios";

export const fetchTodo = () => async dispatch => {
  const res = await axios.get("/todos");
  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const fetchBucket = () => async dispatch => {
  const res = await axios.get("/buckets");
  dispatch({ type: FETCH_TODOS, payload: res.data });
};
