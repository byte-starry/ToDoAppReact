import React from "react";

const ToDoItem = ({ handleCheck, task, handleDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => handleCheck(task.id)}
      />
      <label style={task.checked ? { textDecoration: "line-through" } : null}>
        {task.task}
      </label>
      <button>Edit</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
