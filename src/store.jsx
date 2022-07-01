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
    toggleComplete: (id) =>
        set(
            produce((state) => {
                const book = state.books.find((t) => t.id === Number(id));
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