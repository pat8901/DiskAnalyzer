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
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo2 from '../logos/crc_logo.png'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaBoxesStacked } from 'react-icons/fa6'
import { FaCloudArrowUp } from 'react-icons/fa6'
import FileUpload from '../components/FileUpload'

// +=============================================================================+
// |                            The "Upload" page                                |
// |            This is where a user can upload a report from their              |
// |                   file system to the backend server                         |
// +=============================================================================+
function Upload () {
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
              <NavLink
                className='route'
                to='/upload'
                style={({ isPending }) => {
                  return {
                    backgroundColor: isPending ? 'red' : '#1d3e66'
                  }
                }}
              >
                <FaCloudArrowUp />
                Upload
              </NavLink>
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
            <h1>Upload Page</h1>
          </div>
          <div className='data-container'>
            <div className='data-box'>
              {/*Calling the fileUpload component that will do the upload functions*/}
              <FileUpload />
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
