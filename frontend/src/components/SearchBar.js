import React, { useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'
import './SearchBar.css'

export const SearchBar = () => {
  const [input, setInput] = useState('')
  return (
    <div className='searcher'>
      <FaSistrix id='search-icon' />
      <input
        placeholder='Enter Netid'
        className='input'
        value={input}
        onChange={e => setInput(e.target.value)}
      ></input>
    </div>
  )
}
