import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Greeting from "./Greeting"
import Logos from "./Logos"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logos />

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
