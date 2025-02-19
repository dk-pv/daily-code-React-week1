// import React from 'react'

// function props(props) {
//   return (
//     <div>
//       <h1 style={{backgroundColor:"blue"}}>{props.name}</h1>
//       <h4>lauguage : {props.lauguage}</h4>
      
//     </div>
//   )
// }
// export default props

        //another way props(destructuring)

// import React from 'react'
// function Props({name , lauguage }) {
//   return (
//     <div>
//       <h1>State : {name}</h1>
//       <h3>language : {lauguage}</h3>
//     </div>
//   )
// }
// export default Props


// another way props (if you want add more components use like this )

// import React from 'react'
// function Props({states}) {
//   return (
//     <div>
//       {states.map((state) => (
//         <div>
//           <h1>STATE : {state.name}</h1>
//           <h2>LANGUAGE : {state.lauguage}</h2>

//         </div>
//       ))}    
//     </div>
//   )
// }
// export default Props;

/////////////////////////////////////////////////////////////////////////////

// import React from 'react'

// const Props = () => {
//   return (
//     <div>
//       <Card  Name = "Danish"  age = "18"  Place = "manjeri" />
//     </div>
//   )
// }
// export default Props;

// // first way to access the without destructuring  
// // const Card = (atributes) => {
// //   return (
// //     <div>
// //       <h1>Name : {atributes.Name}</h1>
// //       <h1>Age : {atributes.age}</h1>
// //       <h1>Place : {atributes.Place}</h1>
// //     </div>
// //   )
// // }


// // Second way to access the with destructuring  (parameters are using the same name in argument)
// const Card = ({Name , age , Place}) => {
//         return (
//           <div>
//             <h1>Name : {Name}</h1>
//             <h1>Age : {age}</h1>
//             <h1>Place : {Place}</h1>
//           </div>
//         )
//       }



/////////////////////////////////////////////////////////////////////////


              
                      // props in class component

// import React from "react";

// class Props extends React.Component{
//    render(){
//         return (
//            <div>
//                <Card name = "danish" age = "20" place = "kochi"/> 
//            </div>
//         )
//    }
// }
// export default Props;

// // first way to access props data 
// // class Card extends React.Component{
// //         render(){
// //              return (
// //                 <div>
// //                      <h1>Name  : {this.props.name}</h1>   
// //                      <h1>age  : {this.props.age}</h1>   
// //                      <h1>Place  : {this.props.place}</h1>   
// //                 </div>
// //              )
// //         }
// //      }


// // second way to access props data (with destructuring)

// class Card extends React.Component{
//         render(){
//                 const {name ,age , place} = this.props
//              return (
//                 <div>
//                      <h1>Name  : {name}</h1>   
//                      <h1>age  : {age}</h1>   
//                      <h1>Place  : {place}</h1>   
//                 </div>
//              )
//         }
//      }