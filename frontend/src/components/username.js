// Copyright (C) 2023  Patrick O'Brien-Seitz

// This file is part of frontend.

// frontend is free software: you can redistribute it and/or modify it under the terms of the GNU General 
// Public License as published by the Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.

// frontend is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
// the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along with Foobar. 
// If not, see <https://www.gnu.org/licenses/>.

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
