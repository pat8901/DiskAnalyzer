/*
Copyright (c) 2024 Patrick O'Brien-Seitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// Give this component a better name
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './styles/table.css'

// +=============================================================================+
// |                           "UserName" component                              |
// |  Fetches extra information of the current user to be displayed in a table   |
// |        *This component is deprecated. Does not currently work with          |
// |                "userDynamic" because of routing/slug*                       |
// +=============================================================================+
export const UserName = () => {
  const { slug } = useParams() // how does this work?
  const [post, setPost] = useState([]) // Function to store and set post data. post contains information on current selected user

  // Fetches information on the selected user to be displayed
  useEffect(() => {
    fetch('http://localhost:5000/user-info/' + slug)
      .then(response => response.json())
      .then(data => {
        setPost(data) // Sets "post" to the data that was recieved
        //console.log(data)
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
