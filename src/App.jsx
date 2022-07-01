import React, { useState } from "react";
import { useStore } from "./store";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
