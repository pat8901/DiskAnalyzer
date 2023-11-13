// Copyright (C) 2023  Patrick O'Brien-Seitz

// This file is part of frontend.

// frontend is free software: you can redistribute it and/or modify it under the terms of the GNU General
// Public License as published by the Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.

// frontend is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
// the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along with frontend.
// If not, see <https://www.gnu.org/licenses/>.

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Logo2 from '../logos/crc_logo.png'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaBoxesStacked } from 'react-icons/fa6'
import { UserName } from '../components/username'

// +=============================================================================+
// |                            The "User" page                                  |
// |  This is where a user report is diplayed. Page is part of the search path   |
// | *This is being deprecated as this needs to be more dynamiced based on date* |
// +=============================================================================+
const User = () => {
  const [img, setImg] = useState()
  const { slug } = useParams()
  // console.log(`slug: ${slug}`)

  // Fetches storage plot for searched user from backend
  useEffect(() => {
    // fetchImage function to be called
    const fetchImage = async () => {
      const imageUrl = 'http://localhost:5000/piIMage/' + slug // Backend address for the image
      const res = await fetch(imageUrl) // Fetching image and using await. *not completly sure how this works*
      const imageBlob = await res.blob() // Making the fetch response a blob. *What does blob do*
      const imageObjectURL = URL.createObjectURL(imageBlob) //Not sure what this does
      setImg(imageObjectURL) // Setting the processed image to a state variable
    }
    fetchImage() // Calling fetchImage function
  }, [])

  // Getting and holding the state of the window size.
  // *Does it have to be done this way, or is there a better way. like through pure html*
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])

  // Listens for changes in window size and changes when size change is detected
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]) // Setting window size
    }
    window.addEventListener('resize', handleWindowResize) // Adding window size listener
    return () => {
      window.removeEventListener('resize', handleWindowResize) // Removing listener?
    }
  }, [])

  return (
    <div className='contain' style={{ height: windowSize[1] }}>
      <div className='item-box'>
        <div className='box1'>
          <div style={{ backgroundColor: 'white' }} className='logo-box'>
            <img
              style={{ width: '20vh' }}
              className='logo'
              src={Logo2}
              alt=''
            />
          </div>
          <div className='route-box'>
            <div className='route'>
              <Link className='route' style={{ gap: '15px' }} to='/'>
                <FaHouseChimney></FaHouseChimney>
                Home
              </Link>
            </div>
            <div className='route'>
              <Link className='route' style={{ gap: '15px' }} to='/search'>
                <FaSistrix />
                Search
              </Link>
            </div>
            <div className='route'>
              <Link className='route' style={{ gap: '15px' }} to='/group'>
                <FaBoxesStacked />
                Inventory
              </Link>
            </div>
            <div className='route'>
              <Link className='route' style={{ gap: '15px' }} to='/about'>
                <FaCircleInfo></FaCircleInfo>
                About
              </Link>
            </div>
          </div>
        </div>
        <div className='box2'>
          <div className='search-bar'></div>
          <div className='data-container'>
            <div className='data-box'>
              <div className='matplot'>
                <img className='matplot-image' src={img} alt='' />
              </div>
              <div className='data-table'>
                {/* Calling UserName component to display extra user information */}
                <UserName />
              </div>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
