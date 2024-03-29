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
// |                            The "UserDynamic" page                           |
// |                    This is where a user report is diplayed                  |
// |                      This page is part of the search path                   |
// |                                                                             |
// |     *This replaces the "User" page. The slug/url may need to be further     |
// |                modified to be more efficient. What is useMemo?*             |
// +=============================================================================+
const UserDynamic = () => {
  // Setting image state
  const [img, setImg] = useState()
  // Setting route parameters. How do I get these? Where and how are they set?
  const { year } = useParams()
  const { month } = useParams()
  const { slug } = useParams()
  // const { date } = useParams()
  // console.log(`date: ${date}`)
  // console.log(`slug:${slug}`)

  // Fetches storage plot for searched user from backend
  useEffect(() => {
    // fetchImage function to be called
    const fetchImage = async () => {
      const imageUrl = `http://localhost:5000/piIMage/${year}/${month}/${slug}` // Backend address for the image
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
          <div className='search-bar'>
            <h1>User Dynamic</h1>
          </div>
          <div className='data-container'>
            <div className='data-box'>
              <div className='matplot'>
                <img className='matplot-image' src={img} alt='' />
              </div>
              <div className='data-table'>
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

export default UserDynamic
