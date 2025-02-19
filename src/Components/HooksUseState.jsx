
import React, { useState } from 'react'

function HooksUseState() {

  const [colour,setColour] = useState("Green");

  const changeColour = () => {
    setColour("Red")
  }
   //////////////////////
  const [count,setCount] = useState(0)
  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }


  return (
    <div>
      <h1>UseState Hook In React</h1>
      <h2>my favourate colour is {colour}</h2>
      <button onClick={changeColour}>Change color</button>


      <br /><br />


      <h1>counter is {count}</h1>
      <button onClick={increment} style={{backgroundColor:"green",marginRight:10}}>+</button>

      <button onClick={decrement} style={{backgroundColor:"red"}}>-</button>
    </div>
  )
}
export default HooksUseState;
