import React, {useState} from 'react'

const products =[
    {id:1,name:"Laptop" , Brand:"Lenovo" , qty:1},
    {id:2,name:"Laptop" , Brand:"Apple" , qty:2},
    {id:3,name:"Laptop" , Brand:"HP" , qty:1},
    {id:4,name:"Laptop" , Brand:"Dell" , qty:1},
]

const keys = () => {
    const [items,setItem] = useState(products);

    const changeQTY = (id) =>{ 
        const newItem = items.map((item) => item.id === id ? {...item,qty : item.qty + 1} : item );
        setItem(newItem)
      
    }
  return (
    <div>
        {items.map((product) => (
            <div style={{marginLeft:300}} key={product.id}>
                <h2>{product.name}</h2>
                <h3>Brand : {product.Brand}</h3>
                <h4>quantitiy : {product.qty}</h4>

                <button onClick={() => changeQTY(product.id)} style={{color:"red"}}>+</button>
            </div>
            ))}
    </div>
  )
}

export default keys
