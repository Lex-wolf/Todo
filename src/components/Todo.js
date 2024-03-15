import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, togglecomplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => togglecomplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};
