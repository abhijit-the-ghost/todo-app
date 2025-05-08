type Props = {
  todo: { id: string; title: string; completed: boolean };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        id={`todo-${todo.id}`}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
