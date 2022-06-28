import React, { useState } from "react";
import { useStore } from "./store";

const TodoForm = () => {
    const [userInput, setUserInput] = useState("");
    const add = useStore((state) => state.add);
    const todos = useStore((state) => state.todos);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        add({ id: todos.length + 1, title: userInput, complete: false });
        setUserInput("");
    };
    return (
        <form onSubmit={handleSubmit}>
        <input value={userInput} type="text" onChange={handleChange} />
        <button>Add Todo</button>
        </form>
    );
};

export default TodoForm;
