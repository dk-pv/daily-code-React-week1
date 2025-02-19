import React from 'react'
function EventHandling() {
    const clickHandle = () =>{
        alert("You Clicked Me")
    }
    const doubleClickHandle = () =>{
        alert("you double clicked me")
    }
    const btnDoubleClickHandle = (name) =>{
        alert(`hello ${name}`)    
    }
    const onChangeHandle = () =>{
        alert("you typed in the text")
    }
    const onMouseOverHandle = () =>{
        alert("you mouse oover the element ")
    }
    const onKeyDownHandle = () =>{
        alert("you pressed the key")
    }
    const doubleClick = () =>{
      alert ("iam danish")
    }
  return (
    <div>
        {/* onclick */}
      <button onClick={clickHandle}>Click Me To</button>

        {/* double click */}
      <h1 onDoubleClick={doubleClickHandle}>Double Click</h1>

        {/* double click pass Argument */}
      <button onDoubleClick={() =>{btnDoubleClickHandle("Danish Kukku")}}>DK</button>

        <br /><br />

        {/* onchange */}
      <input onChange={onChangeHandle} type="text" />

        {/* on mouse over
        <h1 onMouseOver={onMouseOverHandle}>mouse over</h1> */}

        {/* on key down */}
        <input type="text" onKeyDown={onKeyDownHandle} style={{background:"red",width:500}}  />



        <button onDoubleClick={doubleClick} style={{backgroundColor:"tomato",color:"black", fontWeight:"bolder"}}> double click me</button>
    </div>
  )
}
export default EventHandling;

