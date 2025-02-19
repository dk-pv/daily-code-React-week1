import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const[counter1 , setCounter1] = useState(0)
    const[counter2 , setCounter2] = useState(0)

    const increment1 = () =>{
        setCounter1(counter1 + 1);
    }
    const increment2 = () =>{
        setCounter2(counter2 + 1);
    }
    const isEven = useMemo(() =>{

        let i = 0
        while (i<20000000000) {
            i++
        }
        return counter1 % 2 == 0 ;
    },[counter1])
  return (
    <div>
      <h1>counter1 : {counter1}</h1>
      <button onClick={increment1}>+ 1</button><br />
      <span>{isEven ? "Even" : "Odd"}</span>  
      <h1>counter2 : {counter2}</h1>
      <button onClick={increment2}>+ 1</button>

    </div>
  )
}

export default UseMemo