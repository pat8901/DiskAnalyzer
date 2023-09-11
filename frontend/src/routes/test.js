import React from 'react'
import { Link } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaCircleInfo } from 'react-icons/fa6'
import { SearchBar } from '../components/SearchBar'
import { SearchBarTest } from '../components/SearchBarTest'

function Test() {
  return (
    <div className='contain'>
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
              <Link className='route' style={{ gap: '15px' }} to='/about'>
                <FaCircleInfo></FaCircleInfo>
                About
              </Link>
            </div>
          </div>
        </div>
        <div className='box2'>

          <div className='search-bar'>
            <SearchBar />
          </div>

          <div className='data-container'>
            <div className='data-box'>
              <div className='matplot'>
                <img
                  className='matplot-image'
                  src={'http://localhost:5000/image'}
                  alt=''
                />
              </div>
              <div className='data-table'>world</div>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
