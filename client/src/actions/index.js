import { FETCH_TODO } from "./types";
import axios from "axios";

export const fetchTodo = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch({ type: FETCH_TODO, payload: res.data });
};
