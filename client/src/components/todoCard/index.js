import React from "react";
import { Link } from "react-router-dom";

const TodoCard = ({ todo }) => {
  return (
    <div className="card shadow card-shadow my-5 mx-3" style={{ width: 15 + "rem" }}>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <Link to={`/todo/{todo.id}`} className="btn btn-primary">
          <i className="material-icons md-24">remove_red_eye</i>
        </Link>
        <Link to={`/todo/{todo.id}/edit`} className="btn btn-success">
          <i className="material-icons md-24">edit</i>{" "}
        </Link>
        <Link to={`/todo/{todo.id}/delete`} className="btn btn-danger">
          <i className="material-icons md-24">delete</i>{" "}
        </Link>
      </div>
    </div>
  );
};

export default TodoCard;
