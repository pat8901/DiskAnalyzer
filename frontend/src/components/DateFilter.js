import React, { useEffect, useState } from 'react'
import './styles/DateFilter.css'

export const DateFilter = () => {
  return (
    <div className='filter'>
      <h3>hello0</h3>
      <h3
        onClick={e => {
          console.log('you clicked August')
        }}
      >
        August
      </h3>
      <h3>hello2</h3>
      <h3>hello3</h3>
    </div>
  )
}
