import reactLogo from './assets/react.svg'
import './App.css'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + TS + React</h1>
      <div>
        <Todos items={['Learn React', 'Learn TypeScript', 'Learn Vite']} />
      </div>
    </>
  )
}

export default App
