import { useState } from "react";
export default function App() {
  const [input, setInput] = useState(""); // input field state
  const [todos, setTodos] = useState([]); // list of todos

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto flex flex-col text-center
      ">
        <h1 className="max-sm:text-3xl font-semibold">Todo App</h1>
        <div className="mt-6">
          <input className="p-3 border border-gray-900" type="text" placeholder="Enter a task" />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
