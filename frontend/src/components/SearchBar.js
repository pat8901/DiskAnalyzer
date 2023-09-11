import React, { useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'
import './SearchBar.css'

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('')
  const users = ['joe', 'jeff', 'pat', 'tim', 'sam', 'bill', 'ash']

  // fetching the data and filtering on the frontend. usually you filter on the backend no the front
  const fetchData = value => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(json => {
        const results = json.filter(user => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }

  const fetchFlaskData = value => {
    fetch('http://localhost:5000/users')
      .then(responce => responce.json())
      .then(json => {
        const results = json.filter(user => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }

  const fetchEstablishedData = value => {
    const filteredItems = users.filter(user => {
      return value && user.toLowerCase().includes(value)
    })
    setResults(filteredItems)
  }

  const handleChange = value => {
    setInput(value)
    fetchEstablishedData(value)
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
