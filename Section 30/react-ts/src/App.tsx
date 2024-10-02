import reactLogo from './assets/react.svg'
import './App.css'

// Classes
import Todo from './models/todo'

// Components
import Todos from './components/Todos'
import NewTodo from './components/NewTodo'

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
    new Todo('Learn Vite'),
  ];

  function addTodoHandler(text: string) {
    const newTodo = new Todo(text);
    todos.push(newTodo);
  }
  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + TS + React</h1>
      <div>
        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos} />
      </div>
    </>
  )
}

export default App
