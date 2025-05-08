import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

const TodoForm = ({ onAdd }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Enter a task</label>
      <input
        type="text"
        placeholder="Enter a task"
        id="todoInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default TodoForm;
