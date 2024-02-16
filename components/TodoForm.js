// components/TodoForm.js

import { useState } from "react";

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
