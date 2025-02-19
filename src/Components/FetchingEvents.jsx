import React, { useEffect, useState } from 'react'

const FetchingEvents = () => {

    const [posts,setPosts] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts.splice(0,10)))
    },[])

  return (
    <div>
      <h1>Fetch API Data</h1>
      {posts.map((post) => 
      <>
        <h1>{post.id}</h1>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </>
      )}
    </div>
  )
}

export default FetchingEvents
