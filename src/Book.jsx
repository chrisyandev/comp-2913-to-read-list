import React from "react";
import { useStore } from "./store";

const Book = ({ book }) => {

    const toggleComplete = useStore((state) => state.toggleComplete);

    const handleClick = (e) => {
        e.preventDefault();
        toggleComplete(e.currentTarget.id);
    };

    return (
        <li
            id={book.id}
            key={book.id + book.title}
            name="book"
            value={book.id}
            onClick={handleClick}
            className={book.complete ? "book strike" : "book"}
        >
            {book.title}
        </li>
    );
};

export default Book;
