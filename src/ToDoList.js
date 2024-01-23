import React from "react";
import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";
import AddToDo from "./AddToDo";

const ToDoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = tasks.filter((task) =>
        task.task.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [tasks, search]);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(tasks));
  }, [tasks]);

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
      <AddToDo tasks={tasks} setTasks={setTasks} />
      <div>
        <label>
          Search:
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {searchResults.length ? (
        <>
          <main>
            <ul>
              {searchResults.map((task) => (
                <ToDoItem
                  key={task.id}
                  task={task}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <>
          {tasks.length ? (
            <>
              <main>
                <ul>
                  {tasks.map((task) => (
                    <ToDoItem
                      key={task.id}
                      task={task}
                      handleCheck={handleCheck}
                      handleDelete={handleDelete}
                    />
                  ))}
                </ul>
              </main>
              <Footer length={tasks.length} />
            </>
          ) : (
            <p>To-Do list is empty</p>
          )}
        </>
      )}
    </>
  );
};

export default ToDoList;
