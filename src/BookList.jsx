import React from "react";
import { useStore } from "./store";

import Book from "./Book";

const getFilteredBookList = (books, filter) => {
        return books.filter((book) => {
        if (filter === "Read") {
            return book.complete;
        } else if (filter === "Reading") {
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
        <button onClick={() => setFilter("Read")}>Read</button>
        <button onClick={() => setFilter("Reading")}>Reading</button>
        <button onClick={() => setFilter("All")}>All</button>
    </ul>
    );
};

export default BookList;
