import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'
import { FaUser } from 'react-icons/fa6'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaBoxesStacked } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import { SearchBar } from '../components/SearchBar'
import { SearchResultsList } from '../components/SearchResultsList'
import '../components/SearchBarTest.css'

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
                {/* <FontAwesomeIcon
                  icon='fa-solid fa-boxes-stacked'
                  style={{ color: '#ffffff' }}
                /> */}
                <FaBoxesStacked />
                Inventory
              </Link>
            </div>
            <div className='route'>
              <Link className='route' style={{ gap: '15px' }} to='/about'>
                <FaCircleInfo></FaCircleInfo>
                About
              </Link>
              {/* Temportay code */}
              {/* <Link className='route' style={{ gap: '15px' }} to='/imagesearch'>
                <FaCircleInfo></FaCircleInfo>
                Image Search
              </Link> */}
              {/* ends here */}
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
