import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [text, setText] = useState(todo.name);
  const [isEditing, setIsEditing] = useState(false);
  function saveEdit() {
    updateTodo(todo.id, { ...todo, name: text.trim() });
    setIsEditing(false);
  }
  return (
    <div className="bg-white my-1 rounded px-2 py-1 flex items-center justify-between gap-3">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() =>
          updateTodo(todo.id, { ...todo, isCompleted: !todo.isCompleted })
        }
      />
      <input
        type="text"
        value={text}
        disabled={!isEditing}
        className={`${todo.isCompleted ? "line-through opacity-40" : ""} ${
          isEditing ? "border" : ""
        } w-full px-2 py-1 border-slate-300 rounded `}
        onKeyDown={(e) => e.key == "Enter" && saveEdit()}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className=" px-2 hover:bg-red-200"
        onClick={() => setIsEditing(true)}
      >
        ✏️
      </button>

      <button
        className=" px-2 hover:bg-red-200"
        onClick={() => deleteTodo(todo.id)}
      >
        ✖️
      </button>
    </div>
  );
};

export default TodoItem;
