// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

import AddTodoForms from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos();

  return (
    <main className='py-10 h-screen space-y-5 overflow-y-auto'>
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForms 
        onSubmit={addTodo}
        />
        <TodoList
        todos={todos} 
        onCompletedChange={setTodoCompleted} 
        onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
      todos={todos}
      deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  );
}

export default App

/* <>
  const [count, setCount] = useState(0)
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */