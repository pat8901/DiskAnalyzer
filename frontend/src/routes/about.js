import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'

function About () {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])

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
              style={{ width: '18vh' }}
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
              <Link className='route' style={{ gap: '15px' }} to='/test'>
                <FaUser></FaUser>
                User Search
              </Link>
            </div>
          </div>
        </div>
        <div className='box2'>
          <div className='search-bar'>
            <h1>About Page</h1>
            <h3>
              Height: {windowSize[1]}
              Width: {windowSize[0]}
            </h3>
          </div>

          <div className='data-container'>
            <div className='data-box'>
              <p style={{ textAlign: 'center' }}>
                The HPC team within The University of Notre Dame's Center for
                Research Computing provides computing resources with the
                associated support for faculty members, researchers, and campus
                users. Within these pages the supporting documentation and
                resources for utilizing the CRC's infrastructure can be found.
                For any questions or assistance please contact us:
                crcsupport@nd.edu
              </p>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
