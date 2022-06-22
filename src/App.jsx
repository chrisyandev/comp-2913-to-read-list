import { createContext, useContext, useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";

const TodoItemsContext = createContext();

export const useTodoItems = () => {
  return useContext(TodoItemsContext);
}

function App() {

  const [todoItems, setTodoItems] = useState([]);

  return (
    <div>
      <TodoItemsContext.Provider value={{ todoItems, setTodoItems }}>
        <TodoInput />
        <TodoList />
        <TodoListFilters />
      </TodoItemsContext.Provider>
    </div>
  );
}

export default App;
