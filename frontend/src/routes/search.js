import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaBoxesStacked } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import { SearchBar } from '../components/SearchBar'
import { Calender } from '../components/Calender'
import { SearchResultsList } from '../components/SearchResultsList'
import '../components/styles/SearchBarTest.css'
import Logo2 from '../logos/crc_logo.png'

// +=============================================================================+
// |                            The "Search" page                                |
// | This page is where one searches for users. When a user is clicked on their  |
// |                     corresponding plots are loaded                          |
// +=============================================================================+
function Search () {
  // Getting the current date
  var today = new Date()
  // Parsing the date into month, day, and year
  var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0
  var dd = String(today.getDate()).padStart(2, '0')
  var year = today.getFullYear()

  // *Debugging* printing to console
  //console.log(`date: ${date}`)
  // console.log(`Real time Date: ${today}`)
  // console.log(`Real time month: ${mm}`)
  // console.log(`Real time day: ${dd}`)
  // console.log(`Real time year: ${year}`)

  // State that will keep track of the current results found when the user searches
  const [results, setResults] = useState([])
  // *Change the name to something meaningful* State that will keep track of the selected date
  const [query, setQuery] = useState(`${year}-${mm}-${dd}`)
  //console.log(`search mydate: ${query}`)

  // Getting and holding the state of the window size.
  // *Does it have to be done this way, or is there a better way. like through pure html*
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])

  // Listens for changes in window size and changes when size change is detected
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]) // Setting window size
    }
    window.addEventListener('resize', handleWindowResize) // Adding window size listener
    return () => {
      window.removeEventListener('resize', handleWindowResize) // Removing listener?
    }
  }, [])

  return (
    <div className='contain' style={{ height: windowSize[1] }}>
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
              {/* In the Nav bar for the selected page the tab will be highlighted
                  Maybe think about making the return value better  */}
              <NavLink
                className='route'
                to='/search'
                style={({ isPending }) => {
                  return {
                    backgroundColor: isPending ? 'red' : '#1d3e66'
                  }
                }}
              >
                <FaSistrix />
                Search
              </NavLink>
            </div>
            <div className='route'>
              <Link className='route' style={{ gap: '15px' }} to='/group'>
                <FaBoxesStacked />
                Inventory
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
            {/* ?Getting result data from child and setting results. how does this differ from searchresultslist? */}
            <SearchBar setResults={setResults} onQuery={setQuery} />
            {/* Getting data from child and setting query */}
            {/* <SearchBar setResults={setResults} />
            <Calender onQuery={setQuery} /> */}
          </div>
          <div className='data-container'>
            <div className='data-box'>
              <div className='list'>
                {/* Passing data gathered from from two children nodes and passing it to another sibling of the two children*/}
                <SearchResultsList results={results} date={query} />
              </div>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
