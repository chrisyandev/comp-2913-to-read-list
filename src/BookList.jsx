import React from "react";
import { useStore } from "./store";
import { useState, useEffect } from "react";

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
    const showEdit = useStore((state) => state.showEdit);
    const toggleShowEdit = useStore((state) => state.toggleShowEdit);
    const editBook = useStore((state) => state.edit);
    const [bookTitleEdit, setBookTitleEdit] = useState("");

    useEffect(() => {
        if (showEdit > -1) {
            setBookTitleEdit(books.find((b) => b.id === Number(showEdit)).title);
        }
    }, [showEdit]);

    const handleChange = (e) => {
        setBookTitleEdit(e.currentTarget.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        editBook(showEdit, bookTitleEdit);
        toggleShowEdit(-1);
    };

    return (
    <ul>
        {getFilteredBookList(books, filter).map((book, index) => {
            return <Book key={book.title+index} book={book} />;
        })}
        <br/>
        <button onClick={() => setFilter("Read")}>Read</button>
        <button onClick={() => setFilter("Reading")}>Reading</button>
        <button onClick={() => setFilter("All")}>All</button>
        { 
            (showEdit > -1) ? 
            <form onSubmit={handleSubmit}>
                <br/>
                <input value={bookTitleEdit} type="text" onChange={handleChange} />
                <button>Confirm Changes</button>
            </form>
            : null
        }
    </ul>
    );
};

export default BookList;
