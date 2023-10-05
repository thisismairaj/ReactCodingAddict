import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Greeting from "./Greeting"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Greeting />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h3>Vite + React</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          HIT MEEE {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs"></p>
    </div>
  )
}

export default App
