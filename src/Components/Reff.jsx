// import React from 'react'

// const Reff = (props) => {
//   return (
//     <div>
//       <h1 className='bg-success'>{[props.contry,props.continent]}</h1>
//     </div>
//   )
// }

// export default Reff




// import React, { useState } from 'react'

// const Reff = () => {
//   const [color,setColor] = useStat()
//   return (
//     <div>
//       <button onClick={changeColor}>change color</button>
//     </div>
//   )
// }

// export default Reff;





// import React, { useEffect, useState } from 'react'

// const Reff = () => {

//   const [counter,setCounter] = useState(10)

//   const changeCounter = () => {
//     setCounter(counter+1)
//   }
//   const change2counter = () =>{
//     setCounter(counter-1)
//   }

//   useEffect(() => {
//     console.log("this is my sideffect")
//   },[])
//   return (
//     <div>
//       <h1>
//         {counter}
//       </h1>
//       <button onClick={changeCounter}>+</button>
//       <button onClick={change2counter}>-</button>
//     </div>
//   )
// }

// export default Reff


// import React, { useEffect, useRef, useState } from 'react'

// const Reff = () => {

//   const ref = useRef(0)

//   useEffect(() =>{
//     console.log("COMPONENT RENDERS")
//   })

//   function handleClick(){
//     ref.current++
//   }

//   return (
//     <div>
//       <h1>{ref.current}</h1>
//       <button onClick={handleClick}>
//         click me
//       </button>
//     </div>
//   )
// }
// export default Reff






// import React, { useEffect, useRef } from 'react';

// const Reff = () => {

//   const inputref = useRef(null)

//   useEffect(() =>{
//     inputref.current.focus()
//   },[])

//   return (
//     <div>
//       <input ref = {inputref} type="text" />
//     </div>
//   )
// }

// export default Reff;






