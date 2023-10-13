import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaBoxesStacked } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import { SearchBar } from '../components/SearchBar'
import { Calender } from '../components/Calender'
import { SearchResultsList } from '../components/SearchResultsList'
import '../components/styles/SearchBarTest.css'

function Search () {
  var today = new Date()
  var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0
  var dd = String(today.getDate()).padStart(2, '0')
  var year = today.getFullYear()
  // console.log(`date: ${date}`)
  // console.log(`Real time Date: ${today}`)
  // console.log(`Real time month: ${mm}`)
  // console.log(`Real time day: ${dd}`)
  // console.log(`Real time year: ${year}`)

  const [results, setResults] = useState([])
  const [query, setQuery] = useState(`${year}-${mm}-${dd}`)
  console.log(`search mydate: ${query}`)

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
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
            <SearchBar setResults={setResults} />
            <Calender onQuery={setQuery} />
          </div>
          <div className='data-container'>
            <div className='data-box'>
              <div className='list'>
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
