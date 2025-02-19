import React, { useState } from 'react'
import {MemoizedChild} from './ReactMemoChild'

const ReactMemoParent = () => {

  const [count,setCount] = useState(0)
  const [name,setName] = useState("Danish")

  console.log("parent rendered")
  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setName("Kukku")}>change name</button>

      <MemoizedChild name={name}/>
    </div>
  )
}

export default ReactMemoParent
