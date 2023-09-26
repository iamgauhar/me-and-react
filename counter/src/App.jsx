import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addCounter = () => {
    setCounter(counter + 1)
  }
  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }

  }
  return (
    <div>
      <h1>The Counter App</h1>
      <div className='parent'>
        <div className='counter-btn'>
          <button onClick={removeCounter}>-</button>
          <button onClick={addCounter}>+</button>
        </div>
        <div><h2>{counter}</h2></div>
      </div>
    </div>

  )
}

export default App
