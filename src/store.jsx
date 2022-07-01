import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
    books: [],
    filter: "All",
    add: (newBook) => 
        set(
            produce((state) => {
                state.books.push(newBook);
            })
        ),
    delete: (id) =>
        set(
            produce((state) => {
                const bookIdx = state.books.findIndex((b) => b.id === Number(id));
                state.books.splice(bookIdx, 1);
            })
        ),
    toggleComplete: (id) =>
        set(
            produce((state) => {
                const book = state.books.find((b) => b.id === Number(id));
                book.complete = !book.complete;
            })
        ),
    setFilter: (newFilter) =>
        set(
            produce((state) => {
                state.filter = newFilter;
            })
        ),
}));