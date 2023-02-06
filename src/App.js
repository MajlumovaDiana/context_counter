import React, { useState } from 'react'
import Counter from './Components/Counter'
import CounterController from './Components/CounterController'

function App() {
 const [count,setCount]=useState(0)
  return (
    <div className="App">
      <Counter count={count}/>
      <CounterController data={[count,setCount]}/>
    </div>
  )
}

export default App
