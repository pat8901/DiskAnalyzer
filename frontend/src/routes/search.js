import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'
import { FaHouseChimney } from 'react-icons/fa6'
// import { FaCircleInfo } from 'react-icons/fa6'
import { SearchBar } from '../components/SearchBar'
import { SearchResultsList } from '../components/SearchResultsList'
import '../components/SearchBarTest.css'
import { FaUser } from 'react-icons/fa6'

function Search () {
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

  const [results, setResults] = useState([])

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
              <Link className='route' style={{ gap: '15px' }} to='/test'>
                <FaUser></FaUser>
                User
              </Link>
            </div>
          </div>
        </div>
        <div className='box2'>
          <div className='search-bar'>
            <SearchBar setResults={setResults} />
          </div>
          <div className='data-container'>
            <div className='data-box'>
              <div className='list'>
                <SearchResultsList results={results} />
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
