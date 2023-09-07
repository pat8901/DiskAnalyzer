import React from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../logos/Notre_Dame_Fighting_Irish_logo.png'
import Logo2 from '../logos/logo512.png'

function About() {
  return (
    <div className='contain'>
      <div className='item-box'>
        <div className='box1'>
          <div style={{ backgroundColor: "white" }} className='logo-box'>
            <img style={{ width: "18vh" }} className='logo' src={Logo2} alt='' />
          </div>
          <div className='route-box'>
            <ul className='list'>
              <a href='/'>Home</a>
              <a href='/test'>User Search</a>
            </ul>
          </div>
        </div>
        <div className='box2'>
          <div className='search-bar'>
            {/* <TextField
              id='outlined-basic'
              variant='standard'
              label='Enter Netid'
              fullWidth
              size='small'
            /> */}
            About Page
          </div>
          <div style={{ backgroundColor: "white" }} className='item1'>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
