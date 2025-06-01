import { useState } from "react";
export default function App() {
  const [input, setInput] = useState(""); // input field state
  const [todos, setTodos] = useState([]); // list of todos

  const addTodo = () => {
    if(input.trim() === "") return;
    setTodos([...todos, {id: Date.now(), text: input, completed: false}]);
    setInput("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto flex flex-col text-center
      ">
        <h1 className="text-3xl sm:text-4xl font-semibold">Todo App</h1>
        <div className="mt-6">
          <input className="p-2 rounded-md border" type="text" placeholder="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo} className="p-2 rounded-md bg-blue-500 text-white">Add</button>
        </div>
        <ul className="text-start text-3xl font-semibold">{
          todos.map((todo) => { 
           return <li id={todo.id} className="border-b py-2">{todo.text}</li>
          })
          }</ul>
      </div>
    </div>
  );
}
