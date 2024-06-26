import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './Components/TicTacToe'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <div className='jj'>
        <h1>O  X</h1>
      </div>
   
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tic Tac Toe</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count )}>
          <Link to="/TicTacToe">Play Now </Link>{count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Jo
      </p>
    </>
  )
}

export default App
