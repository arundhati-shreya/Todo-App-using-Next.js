// pages/index.js

import { useState } from "react";
import TodoForm from "../components/TodoForm";

function Home() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
