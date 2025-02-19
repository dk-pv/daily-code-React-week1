// import React, { useState } from 'react'
// import axios from 'axios'
// const Axios = () => {

//     const fetchUsers =  async () =>{
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//         console.log(response.data)
//         setData(response.data.name)
//     }

//     const [data,setData] = useState([])
//   return (
//     <>
//       <h1> iam a user</h1>
//       <div>
//         <button onClick={fetchUsers}>Get users</button>
//         {data.map(x => (
//             <div>
//                 {x.name}
//             </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default Axios










import React, { useState } from 'react'
import axios from 'axios'
const Axios = () => {

    const fetchData = async() =>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(response.data)
    }

    const [data , setData] = useState([])

  return (
    <div>
        <button onClick={fetchData}>usersId</button>
        {data.map(Id =>(
            <div>
                {Id.id}
            </div>
        ))}
      <button onClick={fetchData}>usersName</button>
      {
        data.map(names =>(
            <div>
                {names.name}
            </div>
        ))
      }
      <button onClick={fetchData}>usersEmail</button>
      {
        data.map(emails =>(
            <div>
                {emails.email}
            </div>
        ))
      }
    </div>
  )
}

export default Axios
