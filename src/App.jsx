import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector(data => data.count)
  const dispatch = useDispatch()

  return (
    <>
      <div className='flex items-center text-red-600 justify-center'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux</h1>
      <div className="card flex flex-col gap-2">
        <button onClick={() => dispatch({type:"DEC"})}>
          -
        </button>
         <button>
          {count}
         </button>
        <button onClick={() => dispatch({type:"INC"})}>
          +
        </button>
      </div>
    </>
  )
}

export default App
