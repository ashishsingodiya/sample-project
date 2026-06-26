import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>📝 Todo App</h1>

        <div className="input-group">
          <input type="text" placeholder="Enter a task..." value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addTodo()} />

          <button onClick={addTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <p className="empty">No tasks yet</p>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <span className={todo.completed ? "completed" : ""} onClick={() => toggleTodo(todo.id)}>
                  {todo.text}
                </span>

                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
