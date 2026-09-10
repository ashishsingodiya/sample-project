import { useState, useEffect } from 'react'
import './App.css'

const INITIAL_TODOS = [
  { id: 1, text: 'Welcome to your todo list!', completed: false },
  { id: 2, text: 'Click checkbox to mark as complete', completed: true },
  { id: 3, text: 'Add your own tasks above', completed: false },
]

function App() {


  const handleAddTodo = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false },
    ])
    setText('')
  }

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Tasks</h1>
        <p className="subtitle">Keep track of your daily goals</p>
      </header>

      <div className="todo-card">
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <button type="submit" className="btn-add" disabled={!text.trim()}>
            Add
          </button>
        </form>

        <div className="todo-filters">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({todos.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active ({activeCount})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({completedCount})
          </button>
        </div>

        <ul className="todo-list">
          {filteredTodos.length === 0 ? (
            <li className="empty-state">
              {filter === 'all'
                ? 'No tasks yet. Add one above!'
                : filter === 'active'
                ? 'No active tasks!'
                : 'No completed tasks yet.'}
            </li>
          ) : (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <label className="todo-label">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="todo-text">{todo.text}</span>
                </label>
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => handleDeleteTodo(todo.id)}
                  aria-label="Delete task"
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>

        <footer className="todo-footer">
          <span className="items-left">
            {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
          </span>
          {completedCount > 0 && (
            <button
              type="button"
              className="btn-clear"
              onClick={handleClearCompleted}
            >
              Clear completed
            </button>
          )}
        </footer>
      </div>
    </div>
  )
}

export default App
