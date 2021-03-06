import React, { useState } from "react";
import { useStore } from "./store";

const BookForm = () => {
    const [userInput, setUserInput] = useState("");
    const add = useStore((state) => state.add);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        add({ title: userInput, complete: false });
        setUserInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Book Title"/>
        <button>Add Book</button>
        </form>
    );
};

export default BookForm;
