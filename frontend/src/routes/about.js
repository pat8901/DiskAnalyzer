import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBoxesStacked } from 'react-icons/fa6'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import crc_logo from '../logos/crc_logo.png'

// +=============================================================================+
// |                            The "About" page                                 |
// |        Holds general information about the purpose of the front end         |
// +=============================================================================+
function About () {
  // Getting and holding the state of the window size.
  // *Does it have to be done this way, or is there a better way. like through pure html*
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])

  // Listens for changes in window size and changes when size change is detected
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
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
              src={crc_logo}
              alt=''
            />
          </div>
          <div className='route-box'>
            <div className='route'>
              <NavLink className='route' style={{ gap: '15px' }} to='/'>
                <FaHouseChimney></FaHouseChimney>
                Home
              </NavLink>
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
                to='/about'
                style={({ isPending }) => {
                  return {
                    backgroundColor: isPending ? 'red' : '#1d3e66'
                  }
                }}
              >
                <FaCircleInfo></FaCircleInfo>
                About
              </NavLink>
            </div>
          </div>
        </div>
        <div className='box2'>
          <div className='search-bar'></div>
          <div className='data-container'>
            <div className='data-box'>
              <p className='paragraph'>
                The HPC team within The University of Notre Dame's Center for
                Research Computing provides computing resources with the
                associated support for faculty members, researchers, and campus
                users. Within these pages the supporting documentation and
                resources for utilizing the CRC's infrastructure can be found.
                For any questions or assistance please contact us:
                crcsupport@nd.edu
              </p>
              <h3>
                Height: {windowSize[1]}
                <br />
                Width: {windowSize[0]}
              </h3>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
