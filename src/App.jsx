import React, { useState } from "react";
import { useStore } from "./store";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const toggleComplete = useStore((state) => state.toggleComplete);

  const handleToggle = (id) => {
    toggleComplete(id);
  };

  return (
    <div className="App">
      <TodoForm />
      <TodoList
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
