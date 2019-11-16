import React from "react";
import { Link } from "react-router-dom";

const TodoCard = ({ todo, handleDelete }) => {
  return (
    <div className="card shadow card-shadow my-5 mx-3" style={{ width: 15 + "rem" }}>
      <div className="card-body">
        {todo.status !== "pending" ? (
          <h5 className="card-title" style={{ textDecoration: "line-through" }}>
            {todo.name}
          </h5>
        ) : (
          <h5 className="card-title">{todo.name}</h5>
        )}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={`/todo/${todo.id}`} className="btn btn-success">
            <span className="fa fa-eye"></span>
          </Link>
          <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
            <span className="fa fa-trash"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
