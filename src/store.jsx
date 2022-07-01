import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
    nextId: 1,
    books: [],
    filter: "All",
    showEdit: -1,
    add: (newBook) => 
        set(
            produce((state) => {
                newBook.id = state.nextId;
                state.nextId++;
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
    edit: (id, newTitle) =>
        set(
            produce((state) => {
                const book = state.books.find((b) => b.id === Number(id));
                book.title = newTitle;
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
    toggleShowEdit: (id) =>
        set(
            produce((state) => {
                state.showEdit = (state.showEdit > -1) ? -1 : id;
            })
        ),
}));