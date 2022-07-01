import React from "react";
import { useStore } from "./store";

const Book = ({ book }) => {

    const toggleComplete = useStore((state) => state.toggleComplete);
    const deleteBook = useStore((state) => state.delete);

    const handleBookTitleClick = (e) => {
        toggleComplete(e.currentTarget.parentNode.id);
    };

    const handleDeleteButtonClick = (e) => {
        deleteBook(e.currentTarget.parentNode.id);
    }

    return (
        <li
            id={book.id}
            key={book.id + book.title}
            name="book"
            value={book.id}
            className={book.complete ? "book strike" : "book"}
        >
            <span onClick={handleBookTitleClick}>{book.title}</span>&nbsp;
            <button onClick={handleDeleteButtonClick}>Delete</button>
            <button>Edit</button>
        </li>
    );
};

export default Book;
