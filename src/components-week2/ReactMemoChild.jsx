import React from 'react'

const ReactMemoChild = ({name}) => {
    console.log("child rendered");
    
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default ReactMemoChild
export const MemoizedChild = React.memo(ReactMemoChild)
