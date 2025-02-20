// State  (class component)

// import React from "react";
// import "../App.css";

// class State extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       ButtonText: "Playing",
//       color: "red",
//       backgroundColor: "black",
//       Dates : new Date()
//     };
//   }

//   change = () => {
//     this.setState({
//       ButtonText: "Paused",
//       color: "black",
//       backgroundColor: "red",
//     });
//   };

//   render() {

//     setInterval(() => {
//         this.setState({
//             Dates : new Date()
//         })
//       }, 1000);

//     return (
//       <div className="App">
//         <h1>{this.state.Dates.toLocaleTimeString()}</h1>
//         <button
//           className="btn"
//           onClick={this.change}
//           style={{
//             color: this.state.color,
//             backgroundColor: this.state.backgroundColor,
//           }}
//         >
//           {this.state.ButtonText}
//         </button>
//       </div>
//     );
//   }
// }
// export default State;
////////////////////////////////////////////////////////////////////////

// tonggle (click change state and another click to get previous state)

// import React from "react";

// class State extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       buttonText: "unsubscribe",
//     };
//   }

//   change = () => {
//     this.setState((previous) => {
//       if (previous.buttonText === "unsubscribe") {
//         return {
//           buttonText: "subscribe",
//         };
//       } else {
//         return {
//           buttonText: "unsubscribe",
//         };
//       }
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.change}>{this.state.buttonText}</button>
//       </div>
//     );
//   }
// }
// export default State;

// import React, { useState } from 'react'

// const State = () => {
//     const [name ,setName] = useState("Danish")

//     const changeName = () => {
//         setName((previous) => {
//             if(previous === "Danish"){
//                 return "kukku"

//             }else{
//                 return "Danish"
//             }
//         })
//     }
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={changeName}>change name</button>
//     </div>
//   )
// }
// export default State

// import React, { useState } from 'react'

// const State = () => {
//     const [btnName , setBtnName] = useState("Unsubscribe")

//     const change = () =>{
//         setBtnName ((previous) => {
//             if(previous === "Unsubscribe"){
//                 return "Subscribe"
//             }else{
//                 return "Unsubscribe"
//             }
//         })
//     }
//   return (
//     <div>
//       <button onClick={change}>{btnName}</button>
//     </div>
//   )
// }

// export default State


/////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react'

// const State = () => {

//     const[counter , setCounter] = useState(0)

//     const increment1 = () =>{
//         setCounter(counter + 1)
//     }
//     const decrement1 = () =>{
//         setCounter(counter - 1)
//     }
//     const increment2 = () =>{
//         setCounter(counter + 2)
//     }
//     const decrement2 = () =>{
//         setCounter(counter - 2)
//     }
//     const reset = () =>{
//         setCounter(0)
//     }
//   return (
//     <div>
//       <h1>count : {counter}</h1>
//       <button onClick={increment1}> + 1 </button>
//       <button onClick={decrement1}> - 1 </button>
//       <button onClick={increment2}> + 2 </button>
//       <button onClick={decrement2}> - 2 </button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default State
