import React from "react";
import { Link } from "react-router-dom";

const TodoCard = ({ todo }) => {
  return (
    <div className="card shadow card-shadow my-5 mx-3" style={{ width: 15 + "rem" }}>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{todo.name}</h5>
        <Link to={`/todo/${todo.id}`} className="btn btn-success">
          View{" "}
        </Link>
        <Link to={`/todo/${todo.id}/delete`} className="btn btn-danger">
          Delete{" "}
        </Link>
      </div>
    </div>
  );
};

export default TodoCard;
