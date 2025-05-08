import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
