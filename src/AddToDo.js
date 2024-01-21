import React, { useState } from "react";

const AddToDo = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = {id, checked: false, task}
    const listTasks = [...tasks, myNewTask]
    setTasks(listTasks)
    //localStorage.setItem('todo list', JSON.stringify(listTasks))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTask) return;
    addTask(newTask)
    setNewTask("")
}
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add Task" 
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default AddToDo;
