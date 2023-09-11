import React, { useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'
import './SearchBar.css'

export const SearchBar = () => {
  const [input, setInput] = useState('')

  // fetching the data and filtering on the frontend. usually you filter on the backend no the front
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((responce) => responce.json()).then((json) => {
      const results = json.filter((user) => {
        return value && user && user.name && user.name.toLowerCase().includes(value)
      });
      console.log(results)
    });
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className='searcher'>
      <FaSistrix id='search-icon' />
      <input
        placeholder='Enter Netid'
        className='input'
        value={input}
        onChange={e => handleChange(e.target.value)}
      ></input>
    </div>
  )
}
