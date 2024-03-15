import React, { useState } from "react";
import { Todo } from "./Todo";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length == 0) {
      alert("Requires a Task!!!");
      return;
    }

    console.log(value);
    addTodo(value);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="Submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
