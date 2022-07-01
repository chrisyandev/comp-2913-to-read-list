import React from "react";
import { useStore } from "./store";

const Todo = ({ todo }) => {

    const toggleComplete = useStore((state) => state.toggleComplete);

    const handleClick = (e) => {
        e.preventDefault();
        toggleComplete(e.currentTarget.id);
    };

    return (
        <li
            id={todo.id}
            key={todo.id + todo.title}
            name="todo"
            value={todo.id}
            onClick={handleClick}
            className={todo.complete ? "todo strike" : "todo"}
        >
            {todo.title}
        </li>
    );
};

export default Todo;
