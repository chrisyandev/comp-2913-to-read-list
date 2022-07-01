import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
    todos: [],
    filter: "All",
    add: (newTodo) => 
        set(
            produce((state) => {
                state.todos.push(newTodo);
            })
        ),
    toggleComplete: (id) =>
        set(
            produce((state) => {
                const todo = state.todos.find((t) => t.id === Number(id));
                todo.complete = !todo.complete;
            })
        ),
    setFilter: (newFilter) =>
        set(
            produce((state) => {
                state.filter = newFilter;
            })
        ),
}));