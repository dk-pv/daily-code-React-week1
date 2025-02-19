import React, { useState , createContext} from 'react'
import UseContextB from './UseContextB';

export const UserContext = createContext();

const UseContextA = () => {

    const [user,setUser] = useState("Danish")

  return (
    <div className='box'>
        <h1>component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <UseContextB user={user}/>
        </UserContext.Provider>
       
    </div>
  )
}

export default UseContextA;
