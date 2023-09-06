import React from 'react'
import { Container, TextField } from '@mui/material'

function Test () {
  return (
    <div className='contain'>
      <div className='item-box'>
        <div className='box1'>
          <div className='logo-box'></div>
          <div className='route-box'>
            <div className='route'>route 1</div>
            <div className='route'>route 2</div>
            <div className='route'>route 3</div>
          </div>
        </div>
        <div className='box2'>
          <div className='search-bar'>
            <TextField
              id='outlined-basic'
              variant='filled'
              fullWidth='25'
              label='Search'
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

export default Test
