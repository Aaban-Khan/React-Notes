import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)

  //run on every render
  useEffect(() => {
    alert("i will run on every render")
  })

  //run on first render
  useEffect(() => {
    alert("i will run on first render")
  }, []) //it takes empty arrray
  
  //run only when certain value was changed
  useEffect(() => { 
    alert("i am running because count (value) was changed")
  }, [count]) //we can put a value in empty [], it will show an alert every time when the value was change
  

  //alert 2 bar showw hoga cuz of strict mode ye paheli bar khud check karta hai aur chalata hai then second time hamare liye chalata hai ye important hai atleast for begineers
  return (
    <>
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
        <button onClick={() => setFirst((first) => first + 1)}>
          First is {first}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Count />
    </>
  )
}

export default App
