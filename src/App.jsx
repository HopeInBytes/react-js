import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
 //let counter = 5;
 
 const addValue=()=>{
  console.log("clicked", counter);
  //counter = counter+1;
  setCounter(counter + 1);
 }
 const removeValue=()=>{
  setCounter (counter - 1);

 }
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
      <h1>Let's Learn React</h1>
      <h4>Counter value: {counter}</h4>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value {counter}</button>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {counter}
      </p>
    </>
  )
}

export default App
