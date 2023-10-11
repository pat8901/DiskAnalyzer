import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'
import { FaCircleInfo } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaBoxesStacked } from 'react-icons/fa6'
import { UserName } from '../components/username'

const UserDynamic = () => {
  const [img, setImg] = useState()
  const { date } = useParams()
  const { slug } = useParams()
  console.log('date:')
  console.log(date)
  console.log('slug:')
  console.log(slug)
  // const slugObject = useMemo(() => {
  //   return { slug: slug }
  // }, [slug])

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = `http://localhost:5000/piIMage/${date}/${slug}`
      const res = await fetch(imageUrl)
      const imageBlob = await res.blob()
      const imageObjectURL = URL.createObjectURL(imageBlob)
      setImg(imageObjectURL)
    }
    fetchImage()
  }, [])

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
              <Link className='route' style={{ gap: '15px' }} to='/search'>
                <FaSistrix />
                Search
              </Link>
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
            <h1>User Dynamic</h1>
          </div>
          <div className='data-container'>
            <div className='data-box'>
              <div className='matplot'>
                <img className='matplot-image' src={img} alt='' />
              </div>
              <div className='data-table'>
                <UserName />
              </div>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDynamic
