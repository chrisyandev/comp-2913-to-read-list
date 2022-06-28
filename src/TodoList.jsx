import React from "react";
import Todo from "./Todo";

const getFilteredTodoList = (todos, filter) => {
  return todos.filter((todo) => {
    if (filter === "Completed") {
      return todo.complete;
    } else if (filter === "Active") {
      return !todo.complete;
    } else {
      return todo;
    }
  });
};

const TodoList = ({ todoList, filter, setFilter, handleToggle }) => {
  return (
    <ul>
      {getFilteredTodoList(todoList, filter).map((todo) => {
        return <Todo todo={todo} handleToggle={handleToggle} />;
      })}
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("All")}>All</button>
    </ul>
  );
};

export default TodoList;
