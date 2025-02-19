import React,{useRef, useState} from 'react'
import { FaPlay,FaPause } from "react-icons/fa";

const UseRefHook = () => {

    const [player,setPlayers] = useState()
    
    const audioRef = useRef(null)

     const player1 =  () =>{
        if(player === false){
            setPlayers(true)
        }else{
            setPlayers(false)
        }
     }
  return (
    <div>
       <audio src=""></audio> 
       <button onClick={player1}>
        {player ?<FaPause /> :<FaPlay />}
       </button>
    </div>
  )
}

export default UseRefHook
