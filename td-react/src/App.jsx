import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import emsiLogo from '/emsi.jpg'
import viteLogo from '/vite.svg'


function Header() {
  return (
    <header>
      <h1>Introduction à React</h1>
      <h4>A la découverte des premières notions de React</h4>
      <a href="#" target="_blank">
          <img src={emsiLogo} className="logo" alt="Vite logo" />
        </a>
    </header>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>EMSI + UNICE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
