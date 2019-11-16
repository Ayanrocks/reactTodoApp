import { FETCH_TODOS,  FETCH_BUCKETS } from "./types";
import axios from "axios";

export const fetchTodo = () => async dispatch => {
  const res = await axios.get("/todos");
  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const fetchBuckets = () => async dispatch => {
  const res = await axios.get("/buckets");
  dispatch({ type: FETCH_BUCKETS, payload: res.data });
};

// export const fetchBucket = id => async dispatch => {
//   const res = await axios.get(`/buckets/${id}`);
//   dispatch({ type: FETCH_BUCKET, payload: res.data });
// };
