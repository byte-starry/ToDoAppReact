import React from "react";
import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";
import AddToDo from "./AddToDo";

const ToDoList = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todolist')) || []);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(tasks))
  }, [tasks])
  

  const handleCheck = (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(listTasks);
  };

  const handleDelete = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
  };

  return (
    <>
    <AddToDo 
        tasks={tasks}
        setTasks={setTasks}
    />
    {tasks.length ? (
      <><main>
                  <ul>
                      {tasks.map((task) => (
                          <ToDoItem
                              key={task.id}
                              task={task}
                              handleCheck={handleCheck}
                              handleDelete={handleDelete} />
                      ))}
                  </ul>
              </main>
              <Footer length={tasks.length} /></>
      ) : (
      <p>To-Do list is empty</p>
      )}
    </>
  );
};

export default ToDoList;
