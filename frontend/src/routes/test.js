import React from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../logos/Notre_Dame_Fighting_Irish_logo.png'
import Logo2 from '../logos/logo512.png'
import ReactSearchBox from "react-search-box";


function Test() {
  return (
    <div className='contain'>
      <div className='item-box'>
        <div className='box1'>
          <div style={{ backgroundColor: "white" }} className='logo-box'>
            <img style={{ width: "18vh" }} className='logo' src={Logo2} alt='' />
          </div>
          <div className='route-box'>
            <div className='route'>
              <Link className='route' to='/'>
                Home
              </Link>
            </div>
            <div className='route'>
              <Link className='route' to='/about'>
                About
              </Link>
            </div>
            <div className='route'>route 3</div>
          </div>
        </div>
        <div className='box2'>
          <div className='search-bar'>
            <ReactSearchBox
              placeholder='PLaceholder'
              value='doe'
            />
          </div>
          <div className='item1'>
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
