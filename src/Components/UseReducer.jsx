// import React,{useReducer} from 'react';

// const initialState =0;

// const reducer = (state = initialState,action) =>{
        
//     switch (action){
//         case "increment":
//             return state = state + 1 ;

//         case "decrement":
//             return state = state -1 ; 

//         case "reset":
//             return state = 0 ; 

//         default:
//             return state ;
//     }
// }

// const UseReducer = () => {

//     const [count , dispatch ] = useReducer(reducer,initialState)

//   return (
//     <div>

//       <h1>{count}</h1>

//       <button onClick={() => dispatch("increment")}>+</button>
//       <button onClick={() => dispatch("decrement")}>-</button>
//       <button onClick={() => dispatch("reset")}>reset</button>

//     </div>
//   )
// }
// export default UseReducer;


/////////////////////////////////////////////////////////////////////////



// import React,{useReducer} from 'react';

// const initialState = {
//   firstCounter : 0,
//   secondCounter : 2
// };

// const reducer = (state = initialState,action) =>{
        
//     switch (action.type){
//         case "increment":
//             return {...state,firstCounter : state.firstCounter + action.value}

//         case "decrement":
//             return {...state,firstCounter : state.firstCounter - action.value}
            
//         case "increment2":
//           return {...state,secondCounter : state.secondCounter + action.value}

//         case "decrement2":
//             return {...state,secondCounter : state.secondCounter - action.value} 

//         case "reset":
//             return {firstCounter : 0 , secondCounter : 2}; 

//         default:
//             return state ;
//     }
// }

// const UseReducer = () => {

//     const [count , dispatch ] = useReducer(reducer,initialState)

//   return (
//     <div>

//       <h1>{count.firstCounter}</h1>
//       <h1>{count.secondCounter}</h1>

//       <button onClick={() => dispatch({type : "increment",value : 1})}>+ 1</button>
//       <button onClick={() => dispatch({type : "decrement", value : 1})}>- 1</button>
//       <button onClick={() => dispatch({type : "reset"  })}>reset</button>

//       <button onClick={() => dispatch({type : "increment",value : 5})}>+ 5</button>
//       <button onClick={() => dispatch({type : "decrement",value : 5})}>- 5</button>

//       {/* second counter button */}
//       <button onClick={() => dispatch({type : "increment2",value : 1})}>2nd counter+ 1</button>
//       <button onClick={() => dispatch({type : "decrement2", value : 1})}>2nd counter - 1</button>

//     </div>
//   )
// }
// export default UseReducer;


/////////////////////////////////////////////////////////////////////////



import React, {useReducer} from 'react'

const reducerFunction = (state , action) =>{
  switch (action.type) {
    case "increment":
      return {initialValue : state.initialValue+1}
    case "decrement":
      return {initialValue : state.initialValue - 1}
    default:
      return state;
  }  
}

const UseReducer = () => {

  const [state , dispatch] = useReducer(reducerFunction,{initialValue:0})

  const incement = () => {
    dispatch ({type : "increment"}) ;
  }
  const decrement = () => {
    dispatch ({type : "decrement"})
  }
  return (
    <div>
      <button onClick={incement}>+</button> 

      <h1>{state.initialValue}</h1>

      <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseReducer

