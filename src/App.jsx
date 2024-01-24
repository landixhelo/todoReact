import React, { useState } from "react";
import "../src/App.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  //add new todo
  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  //remove todo
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo">
      <div>
        <input type="text" id="newTask" />
      </div>
      <div className="button">
        <button
          onClick={() => addTask(document.getElementById("newTask").value)}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {" "}
            {task.text}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
            />
            <button className="btn" onClick={() => removeTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
