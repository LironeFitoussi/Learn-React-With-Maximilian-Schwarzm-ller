import reactLogo from './assets/react.svg'
import './App.css'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
    new Todo('Learn Vite'),
  ];

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + TS + React</h1>
      <div>
        <Todos items={todos} />
      </div>
    </>
  )
}

export default App
