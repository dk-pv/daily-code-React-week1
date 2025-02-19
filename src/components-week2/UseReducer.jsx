                              // counter app

// import React from "react";
// import { useReducer } from "react";

// const initialState = 0;
// const reducerFunction = (state = initialState, action) => {
//   switch (action) {
//     case "increment":
//       return (state = state + 1);

//     case "decrement":
//       return (state = state - 1);

//     case "reset":
//       return (state = 0);
//     default:
//       return state;
//   }
// };

// const UseReducer = () => {
//   const [count, dispatch] = useReducer(reducerFunction, initialState);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch("increment")}>+</button>
//       <button onClick={() => dispatch("decrement")}>-</button>
//       <button onClick={() => dispatch("reset")}>AC</button>
//     </div>
//   );
// };

// export default UseReducer;

/////////////////////////////////////////////////////////




import React, { useReducer } from "react";

const reducer = (state) => {
  return { isOn: !state.isOn }; // Toggle the state
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { isOn: false });
  return (
    <div>
      <h2>Light is {state.isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => dispatch()}>Toggle</button>
    </div>
  );
};
export default UseReducer;





// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch("increment")}>+</button>
//     </div>
//   );
// };
// export default Counter;

