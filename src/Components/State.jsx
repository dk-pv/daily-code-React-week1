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



import React from 'react'

class State extends React.Component{

    constructor(){
        super()
        this.state = {
            buttonText : ""
        }
    }

    render(){
        return(
            <div>
                <button></button>
            </div>
        )
    }
}

export default State
