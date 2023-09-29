import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'
import { FaBoxesStacked } from 'react-icons/fa6'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'

function Group () {
  // This code may be useful to remember
  // const ID = 85
  // const Name = 'Larry David'
  // const storageAmount = 100
  // const HandleSumbit = e => {
  //   const message = { ID, Name, storageAmount }
  //   fetch('http://localhost:5000/test', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(message)
  //   }).then(() => {
  //     console.log(message)
  //   })
  // }
  // End

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
              <NavLink
                className='route'
                to='/group'
                style={({ isPending }) => {
                  return {
                    backgroundColor: isPending ? 'red' : '#1d3e66'
                  }
                }}
              >
                <FaBoxesStacked />
                Inventory
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
          <div className='search-bar'></div>
          <div className='data-container'>
            <div className='data-box'>
              <div className='matplot'>
                <img
                  className='matplot-image'
                  src={'http://localhost:5000/image'}
                  alt=''
                />
              </div>
              <div className='matplot'>
                <img
                  className='matplot-image'
                  src={'http://localhost:5000/image/combined'}
                  alt=''
                />
              </div>
              <div className='matplot'>
                <img
                  className='matplot-image'
                  src={'http://localhost:5000/image/afsGroup'}
                  alt=''
                />
              </div>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group
