// const dk = () =>{
//   const name = "smith"
//   const a = 50;
//   const b = 800;
//   const messege = () =>{
//     return "good morning guys"
//   }
//   return(
//     <Fragment>
//       <h1>danish kukku</h1>
//       <h1>my nick is {name}</h1>
//       <h1>{a + b}</h1>
//       <h1>{50 + "100"}</h1>
//       <h1>{50 + 100}</h1>
//       <p>{messege()}</p>
//     </Fragment>
//   );
// };
//export default dk;

/////////////////////////////////////////////

// function App() {
//   return (
//     <>
//       <table>
//         <Row/>
//         <Column/>
//       </table>
//     </>
//   );
// };

// function Row(){
//   return(
//     <>
//       <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Qualification</th>
//         <th>place</th>
//       </tr>
//     </>
//   );
// };

// function Column(){
//   return(
//     <>
//       <tr>
//         <td>1</td>
//         <td>Danish</td>
//         <td>Bachelor Degree</td>
//         <td>Manjeri</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>Wadood</td>
//         <td>Masters in M.COM</td>
//         <td>Kochi</td>
//       </tr>
//       <tr>
//         <td>3</td>
//         <td>Faizy</td>
//         <td>+2 commerce</td>
//         <td>Kottakkal</td>
//       </tr>
//     </>
//   );
// };
// export default App;

////////////////////////////////////////////////////////////

// access components
// 2 types (functional & class)

//class component

// import React, { Component } from "react";
// class Welcome extends Component {
//   render() {
//     return <h1>Hello!</h1>;
//   }
// }
// export default Welcome;

// functional components

// example 1

// import Package from "./Components/Condition"
// function App(){
//   return (
//     <div>
//       <Package/>
//     </div>
//   )
// }
// export default App;

//example 2

// import Profile from "./Components/Profile";
// function App() {
//   return (
//     <div>
//       <h1>world map</h1>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//     </div>
//   );
// };
// export default App;

// example 3

// import React from 'react';
// function App() {
//   return (
//     <div>
//       <Header/>
//     </div>
//   )
// }
// export default App

// import React from 'react';
// import Style from './Components/Style';

// const App = () => {
//   return (
//     <div>
//       <Style/>
//     </div>
//   );
// };
// export default App;

// import React from 'react'
// import Home from './Components/Home'
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }
// export default App

////////////////////////////////////////////

//bootstrap

// import React from 'react'
// import Bootstrap from './Components/bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <div>
//       <Bootstrap/>
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////

// event handling

// import React from 'react'
// import EventHandling from './Components/EventHandling'

// const App = () => {
//   return (
//     <div>
//       <EventHandling/>
//     </div>
//   )
// }
// export default App

///////////////////////////////////////////////

// HOOKS - usestate

// import React from 'react'
// import HooksUseState from './Components/HooksUseState'

// const App = () => {
//   return (
//     <div>
//       <HooksUseState/>
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////

// props

// import React from 'react'
// import Props from './Components/Props'

// const App = () => {
//   return (
//     <div>
//       <Props name={"Kerala"}  lauguage={"Malayalam"}/>
//       <Props name={"Karnataka"} lauguage={"Kannada"}/>
//       <Props name={"Tamilnadu"} lauguage ={"Tamil"}/>
//       <Props name={"AndhraPradesh"} lauguage={"Hindi"}/>
//       <Props name={"Goa"} lauguage={"Hindi"}/>
//       <Props name={"Thelughana State"} lauguage ={"Telungu"}/>
//     </div>
//   )
// }
// export default App

// another way props (if you want add more components use like this )

// import React from 'react'
// import Props from './Components/Props'
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Container } from 'react-bootstrap'
// const App = () => {
//     const states = [
//         {name : "kerala",lauguage:"malayalam"},
//         {name:"Karnataka", lauguage:"Kannada"},
//         {name:"Tamilnadu" ,lauguage :"Tamil"},
//         {name:"AndhraPradesh" ,lauguage:"Telugu"},
//         {name:"Goa" ,lauguage:"Hindi"}
//     ]
//   return (
//     <div className='bg-primary'>
//         <Container>
//         <Props states = {states}/>
//         </Container>

//     </div>
//   )
// }
// export default App

//////////////////////////////////////////////////////////////

// Conditional rendering

// use if else.

// import React from 'react'
// function conditionalRendering() {
//     let number = 0;
//     const CheckNumber = () => {
//         if(number > 0){
//             return <h1>number is positive +ve : {number}</h1>
//         }else if (number<0){
//             return <h1>number is Negative -ve : {number}</h1>
//         }else{
//             return<h1>enderd number is {number} please enter a number 'without 0' :  </h1>
//         }
//     }
//     return (
//     <div>
//         <CheckNumber/>
//     </div>
//     )
// }
// export default conditionalRendering;

// use ternory oprator

// import React from 'react'

// function App() {
//     let Number = 0;
//   return <div>
//     {Number>0?<h1>positive</h1>:Number<0?<h1>negative</h1>:<h1>zero</h1>}
//   </div>

// }
// export default App

// use cpmponet (repalce <h1>)

// import React from 'react'
// import Main from './Components/conditionalRendering/Main'

// function App() {
//   return (
//     <div>
//       <Main isLoggedin = {false}/>
//     </div>
//   )
// }

// export default App

////////////////////////////////////////////

// List

// import React from 'react'
// import ListRendering from './Components/ListRendering'

// function App() {
//   return (
//     <div>
//       <ListRendering/>
//     </div>
//   )
// }
// export default App

/////////////////////////////////////////////////////////////////

// key and list

// import React from 'react'
// import Keys from './Components/keys'
// function App() {
//   return (
//     <div>
//       <Keys/>
//     </div>
//   )
// }
// export default App

///////////////////////////////////////////////////////////////////

//exercise/ task1 (online store product list )

// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
// import Products from './Components/exersice-task1/Products'

// const App = () => {
//   return (
//     <div>
//       <Products/>
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////

// use effect hook

// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
// import UseEffect from './Components/Effect'

// const App = () => {
//   return (
//     <div>
//       <UseEffect/>
//     </div>
//   )
// }

// export default App

/////////////////////////////////////////////////////////////////////

// useref hooks

// import React from 'react'
// import UseRefHook from './Components/UseRefHook'

// const App = () => {
//   return (
//     <div>
//       <UseRefHook/>
//     </div>
//   )
// }

// export default Appe

////////////////////////////////////////////////////

//fetching data

// import React from 'react'
// import FetchingEvents from './Components/FetchingEvents'

// const App = () => {

//   return (
//     <div>
//       <FetchingEvents/>
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////

// Form Validation

// import React from 'react'
// import FormValidation from './Components/FormValidation'

// const App = () => {
//   return (
//     <div>
//       <FormValidation/>
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////////

//ruf

{
  /* EVENT HANDLING */
}

// import React from 'react'
// const Reff = () => {
//     const submitBtn = () =>{
//         alert("your form is submitted");
//     }
//   return (
//     <div>
//         <button onClick={submitBtn}>submit</button>
//     </div>
//   )
// }
// export default Reff;

// import {Container} from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./App.css"
// import Reff from './Components/Reff'

// const App = () => {
//   return (
//     <div className='div'>
//       <Container>
//         <Reff  contry = {"INDIA"}  continent = {"ASSIA"}/>
//         <Reff  contry = {"CHINA"}  continent = {"ASSIA"}/>
//         <Reff  contry = {"AMERICA"} continent = {"NORTH AMERICA"}/>
//         <Reff  contry = {"RUSSIA"}  continent = {"EUROPE"}/>
//         <Reff  contry = {"GERMANY"} continent = {"EUROPE"}/>
//         <Reff  contry = {"FRANCE"} continent = {"EUROPE"}/>
//       </Container>
//     </div>
//   )
// }
// export default App;

// const App = () => {
//   let number = -10;
//   return (
//     <div>
//       {number > 0 ? <h1>positive</h1> : number < 0 ? <h1>nehative</h1> : <h1>wrong commad</h1>}
//     </div>
//   )
// }

// export default App

// import React, { useState ,useEffect } from 'react'
// const Effect = () => {
//     const [counter , setCounter] = useState(0)

//     useEffect(() =>{
//       {console.log("side effects")}
//     })
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter+1)}>+</button>
//     </div>
//   )
// }
// export default Effect;

// import React from 'react'
// import Sample from './Components/sample';
// const App = () => {
//   return (
//     <div >
//       <Sample/>
//     </div>
//   )
// }
// export default App;

///////////////////////////////////////////////////////////

// UseReduce

// import React from 'react'

// import "./App.css"
// import UseReducer from './Components/UseReducer'

// const App = () => {
//   return (
//     <div className='App'>
//       <UseReducer/>
//     </div>
//   )
// }
// export default App

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//class componenet

// import React,{Component} from "react";
// import ClassComponenet from "./Components/ClassComponenet";

// class App extends Component{

//   state = {
//     name : "hello danish",
//     day : "good morning"
//   }
//   handleChange = () =>{
//     this.setState({
//       name:"hy sulaiman"
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>

//         <button onClick={this.handleChange}>change name</button>

//         <ClassComponenet sendingData = {this.state.name}/>
//       </div>
//     )
//   }
// }
// export default App;

// import React,{Component} from "react";
// // import ClassCounter from "./Components/ClassCounter.JSX";
// import ClassForms from "./ClassForms";

// class App extends Component{
//   render(){
//     return(
//       <div>
//         {/* <ClassCounter/> */}
//         <ClassForms/>
//       </div>
//     )
//   }
// }
// export default App;

/////////////////////////////////////////////////////////////////

// import React from 'react'
// import UseContextA from './Components/UseContextA'
// import "./App.css"

// const App = () => {
//   return (
//     <div>
//       <UseContextA />
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// // import State from './Components/State'
// // import DidMount from './components/DidMount'
// import DidUpdate from './Components/DidUpdate';

// const App = () => {
//   return (
//     <div>
//       {/* <State /> */}
//       {/* <DidMount /> */}
//       <DidUpdate/>
//     </div>
//   )
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////

//component will Unmount

import React from "react";
import UnMount from "./components/UnMount";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  deleting = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <div>
          {this.state.show ? <UnMount /> : ""}
          <button onClick={this.deleting}>click</button>
        </div>
      </>
    );
  }
}

export default App;
