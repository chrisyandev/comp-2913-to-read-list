import React, { useState } from "react";
import data from "./data.json";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [todoList, setTodoList] = useState(data);
  const [filter, setFilter] = useState("All");

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length + 1, task: userInput, complete: false }
    ];
    setTodoList(copy);
  };

  return (
    <div className="App">
      <TodoForm addTask={addTask} />
      <TodoList
        todoList={todoList}
        filter={filter}
        setFilter={setFilter}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
