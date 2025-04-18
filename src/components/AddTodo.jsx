import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [newTask, setNewTask] = useState("");
  function createNewTask() {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      name: newTask,
      isCompleted: false,
    };
    addTodo(task);
    setNewTask("");
  }
  return (
    <div className="my-5 flex items-center justify-between gap-3 mt-5">
      <input
        type="text"
        value={newTask}
        placeholder="Add New Task"
        className=" border w-full rounded px-3 py-2 border-slate-300"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button
        onClick={createNewTask}
        className="bg-gray-500 hover:bg-gray-700 text-white px-8 py-2 rounded "
      >
        ADD
      </button>
    </div>
  );
}

export default AddTodo;
