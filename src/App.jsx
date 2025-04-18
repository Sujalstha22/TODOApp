import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedData = localStorage.getItem("todos");
    return storedData ? JSON.parse(storedData) : [];
  });

  function addTodo(task) {
    setTodos([task, ...todos]);
  }

  function updateTodo(id, data) {
    const updatedTodos = todos.map((todo) => (todo.id === id ? data : todo));
    setTodos(updatedTodos);
  }
  function deleteTodo(id) {
    const remaningTodos = todos.filter((todo) => todo.id != id);
    setTodos(remaningTodos);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="py-10 px-10">
      <div className="container max-w-screen-xl mx-auto py-8 px-8 bg-slate-100 shadow-lg rounded-2xl">
        <Title />
        <AddTodo addTodo={addTodo} />
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
