import { useState } from 'react'
import './App.css'
import emsiLogo from '/emsi.jpg'


function Header() {
  return (
    <header>
      <h1>Introduction à React</h1>
      <h5>A la découverte des premières notions de React</h5>
      <a href="#" target="_blank">
          <img src={emsiLogo} className="logo" alt="Vite logo" />
        </a>
    </header>
  )
}

function MainContent(){
  return (
    <h3>
      Ici, nous afficherons des informations interessantes :) "
    </h3>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <MainContent />
    </>
  )
}

export default App
