import { useState } from "react";
import { useTodoItems } from "./App";

export default function TodoInput() {

    const { todoItems, setTodoItems } = useTodoItems();

    const [todoInput, setTodoInput] = useState("");

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    }

    const handleAddClick = () => {
        const newItem = { name: todoInput, complete: false };
        setTodoItems(oldArray => [...oldArray, newItem]);
    }

    return (
        <div>
            <input type="text" placeholder="New TODO item..." onChange={handleInputChange}></input>
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
}