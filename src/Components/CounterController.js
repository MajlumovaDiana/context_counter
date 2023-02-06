import React, { useContext } from 'react'
import { MainContext } from '../Context/Context';

function CounterController() {
   const [count,setCount]=useContext(MainContext);
    function increase(){
       setCount(count +1);
    }
    function decrease() {
      setCount(count-1);
    }
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default CounterController
