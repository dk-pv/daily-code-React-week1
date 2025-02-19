                    //  custom hook


// import React, { useState } from 'react'
// import { CustomHook } from './components-week2/CustomHook';

// const App2 = () => {
//     const [value , handleChange] = CustomHook({
//         name : "",
//         email :"",
//         password :"",
//     })
    
//     console.log(value.name);
//     console.log(value.email);
    
//   return (
//     <div>
//       <label htmlFor="">   Name :  </label>
//       <input type="text" name='name' value={value.name}  onChange={handleChange} placeholder='Full Name' required/>
//         <br /><br />
//       <label htmlFor="">   Email :  </label>
//       <input type="email" name='email' value={value.email} onChange={handleChange} required placeholder='Email'/>
//       <br /><br />
//       <label htmlFor="">   Password :  </label>
//       <input type="password" name='password' value={value.password} onChange={handleChange} required placeholder='password'/>
//     </div>
//   )
// }

// export default App2


///////////////////////////////////////////////////////////////////////////

                      //useMemo


// import React, { useMemo, useState } from 'react'

// const App2 = () => {

// const [counterOne,setCounterOne] = useState(0)
// const [counterTwo,setCounterTwo] = useState(0)

// const incrementCounterOne = () =>{
//   setCounterOne(counterOne + 1);
// }
// const incrementCounterTwo = () =>{
//   setCounterTwo(counterTwo + 1);
// }

// const isEven = useMemo(() =>{
//   let i = 0;
//   while (i<2000000000)
//     i++
//   return counterOne % 2 ===0  
// },[counterOne,counterTwo])

//   return (
//     <div>
//       <h1>counter 1 = {counterOne}</h1>
//       <button onClick={incrementCounterOne}>+</button>
//       <span>{isEven ? "EVEN" : "ODD" }</span>

//       <h1>counter 2 = {counterTwo}</h1>
//       <button onClick={incrementCounterTwo}>+</button>
//     </div>
//   )
// }

// export default App2

//////////////////////////////////////////////////////////////////////////////



                            // React.Memo


// import React from 'react'
// import ReactMemoParent from './components-week2/ReactMemoParent'

// const App2 = () => {
//   return (
//     <div>
//       <ReactMemoParent/>
//     </div>
//   )
// }

// export default App2


/////////////////////////////////////////////////////////////////////////



                        //useReducer
// import React from 'react'
// import UseReducer from './components-week2/UseReducer'

// const App2 = () => {
//   return (
//     <div>
//       <UseReducer />
//     </div>
//   )
// }

// export default App2


/////////////////////////////////////////////////////////////////////////

                      // React.memo

// import React from 'react'
// import ReactMemo from './components-week2/ReactMemo'

// const App2 = () => {
//   return (
//     <div>
//       <ReactMemo name={"danish"}/>
//     </div>
//   )
// }

// export default App2



///////////////////////////////////////////////////////////////////////////

//useMemo

// import React from 'react'
// import Counter from './components-week2/UseReducer'
// import UseMemo from './components-week2/UseMemo'

// const App2 = () => {
//   return (
//     <div>
//       <Counter/>
//       <UseMemo />
//     </div>
//   )
// }

// export default App2


//////////////////////////////////////////////////////////////////


                          // Axios
  
import React from 'react'
import Axios from './components-week2/Axios'


const App2 = () => {
  return (
    <div>
      <Axios />
    </div>
  )
}

export default App2















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setPosts(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Posts</h2>
//       <ul>
//         {posts.slice(0, 5).map(post => (
//           <li key={post.id}>
//             <strong>{post.title}</strong>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;





