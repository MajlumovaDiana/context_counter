import React, { useContext } from 'react'
import { MainContext } from '../Context/Context'

function Counter() {
    const [count]=useContext(MainContext)
  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  )
}

export default Counter