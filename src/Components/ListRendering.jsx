import React from 'react'

function ListRendering() {
    let list =[
        {
            name:"danish"
        },
        {
            name:"suhail"
        },
        {
            name:"sabith"
        },
        {
            name:"manaf"
        },
        {
            name:"ak"
        }
    ]
  return (
    <div>
      <h1>Students</h1>
      {list.map((item) =>(
        <li>{item.name}</li>
      ))}
    </div>
  )
}

export default ListRendering

