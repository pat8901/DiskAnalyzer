// *Note* need to work on the retrival of users based on date selection
import React, { useEffect, useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import './styles/SearchBar.css'

// +=============================================================================+
// |                          "SearchBar" component                              |
// |          This component watches for user input, detected input              |
// |                        is then filtered/sorted                              |
// |                                                                             |
// |      The processed input data is then passed to it's parent "Search"        |
// +=============================================================================+
export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('') // Holds the state of input in the searchbar. *Is this even used?*
  const [users, setUsers] = useState('') // Holds the state of users that match searchbar input
  const { date } = useParams() // Not sure if this is used. *I think this is would be used to select different users based on date filter*
  console.log(`(SearchBar.js) date: ${date}`) // Not sure if this is used

  // Fetches array of users from backend to be search through
  // How can I make this cached?
  // How to change the array of users based on date
  // This is where I will change the get response using slugs to grab the proper set of user based on date
  useEffect(() => {
    fetch('http://localhost:5000/people')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUsers(data)
      })
  }, [])

  // *Better name?* Filtering/sorting the users based on user input then setting it to "results" by using "setResults". "setResults" is a prop.
  // The return value is sent up to the parent "Search" found in "SearchBar.js"
  const fetchEstablishedData = value => {
    // Filtering/sorting data
    const filteredItems = users.filter(user => {
      // Debugging data
      // console.log(value.toLowerCase())
      // console.log(user)
      // console.log(value && user.toLowerCase().includes(value.toLowerCase()))
      return value && user.toLowerCase().includes(value.toLowerCase())
    })
    console.log(`(SearchBar.js) results: ${filteredItems.sort()}`)
    setResults(filteredItems.sort()) // Setting the "result" using "setResults" prop
  }

  // When a change is detected in the searchbar run this function
  const handleChange = value => {
    setInput(value) // *Is this even used?*
    fetchEstablishedData(value) // Runs filtering/sorting function
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
