import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../components/table.css'

export const UserName = () => {
  const { slug } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/user-info/' + slug)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setPost(data)
      })
  }, [])

  return (
    <div>
      {post.map(data => {
        return (
          <table key={data.Id}>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{data['Full Name']}</td>
              </tr>
              <tr>
                <th>Id</th>
                <td>{data.Id}</td>
              </tr>
              <tr>
                <th>Dept Code</th>
                <td>{data['DepCode']}</td>
              </tr>
              <tr>
                <th>Total Storage (TB)</th>
                <td>{data['Tot.Used Space'] / 1000000000}</td>
              </tr>
            </tbody>
          </table>
        )
      })}
    </div>
  )
}
