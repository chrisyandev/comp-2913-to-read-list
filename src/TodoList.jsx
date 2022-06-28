import React from "react";
import { useStore } from "./store";

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

const TodoList = ({ filter, setFilter, handleToggle }) => {
    const todos = useStore((state) => state.todos);
    return (
    <ul>
        {getFilteredTodoList(todos, filter).map((todo, index) => {
            return <Todo key={todo.title+index} todo={todo} handleToggle={handleToggle} />;
        })}
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("All")}>All</button>
    </ul>
    );
};

export default TodoList;
