import React from "react";
import { useStore } from "./store";

import Book from "./Book";

const getFilteredBookList = (books, filter) => {
        return books.filter((book) => {
        if (filter === "Completed") {
            return book.complete;
        } else if (filter === "Active") {
            return !book.complete;
        } else {
            return book;
        }
    });
};

const BookList = () => {
    const books = useStore((state) => state.books);
    const filter = useStore((state) => state.filter);
    const setFilter = useStore((state) => state.setFilter);
    return (
    <ul>
        {getFilteredBookList(books, filter).map((book, index) => {
            return <Book key={book.title+index} book={book} />;
        })}
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("All")}>All</button>
    </ul>
    );
};

export default BookList;
