import React from 'react'
import "./style.css"

function Style() {
  const head = {color : "red"}
  return (
    <div>
      <h1 style={{color:"rebeccapurple"}}>Danish kukku</h1>   {/* inline css */}

      <h1 style={head}>danish pv</h1>      {/*through variable*/}

      <p className='Para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi vitae debitis vero illo repellendus totam veniam molestias delectus nesciunt repellat assumenda eum ex, illum odio tempore ab incidunt nobis facilis?</p> 
      {/* create new css file. and add particuler styles in that file . and import in css file */}
    </div>
  )
}

export default Style
