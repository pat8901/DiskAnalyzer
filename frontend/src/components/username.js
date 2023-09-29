import React, { useState, useEffect } from 'react'

export const UserName = () => {
  const [post, setPost] = useState([])
  //   const [result, setResult] = useState([])

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(responce => responce.json())
  //       .then(data => {
  //         console.log(data)
  //         setResult(data)
  //       })
  //   }, [])

  //   useEffect(() => {
  //     fetch('http://localhost:5000/username')
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data)
  //         setPost(data.name)
  //       })
  //   }, [])
  //   return <div>{post}</div>

  useEffect(() => {
    // fetch('http://localhost:5000/username')
    fetch('http://localhost:5000/user-info')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPost(data)
      })
  }, [])

  return (
    <div>
      {post.map(data => {
        return (
          <h1 key={data.Id}>
            Name: {data['Full Name']}
            <br></br>
            ID: {data.Id}
            <br />
            Total Storage: {data.DepCode}
          </h1>
        )
      })}
    </div>
  )
}
