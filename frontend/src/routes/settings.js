import React from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../logos/Notre_Dame_Fighting_Irish_logo.png'

function Settings () {
  return (
    <div className='contain'>
      <div className='item-box'>
        <div className='box1'>
          <div className='logo-box'>
            <img className='logo' src={Logo} alt='' />
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
            <TextField
              id='outlined-basic'
              variant='standard'
              label='Enter Netid'
              fullWidth
              size='small'
            />
          </div>
          <div className='item1'>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
