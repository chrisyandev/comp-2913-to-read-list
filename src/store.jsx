import create from "zustand";

export const useStore = create((set) => ({
    todos: [],
    add: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo]})),
    toggleComplete: (id) =>
        set(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === Number(id)) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        }))
}));