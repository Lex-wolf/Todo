import React, { useState } from "react";
import { Todo } from "./Todo";

export const EditTodoForm = ({ editTodo, updateTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length < 4) {
      alert("Require a Task!!!");
      return;
    }

    console.log(value);
    updateTodo(editTodo.id, value);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="Submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
