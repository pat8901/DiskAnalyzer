import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo2 from '../logos/logo512.png'

import { FaCircleInfo } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaBoxesStacked } from 'react-icons/fa6'

function Home () {
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
              <NavLink
                className='route'
                to='/'
                style={({ isPending }) => {
                  return {
                    backgroundColor: isPending ? 'red' : '#1d3e66'
                  }
                }}
              >
                <FaHouseChimney></FaHouseChimney>
                Home
              </NavLink>
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
            <h1>Home Page</h1>
          </div>
          <div className='data-container'>
            <div className='data-box'>
              <p style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                massa orci, posuere eget massa vitae, iaculis efficitur augue.
                Morbi rhoncus dui non eleifend porttitor. Aenean at nulla sit
                amet justo hendrerit tincidunt in non nulla. Nullam viverra,
                felis at vehicula blandit, mi velit ultricies nunc, eget gravida
                mauris neque nec tortor. Fusce enim lectus, pretium nec sem nec,
                ornare molestie orci. Nullam porttitor cursus dui ut consequat.
                Pellentesque feugiat, metus at porta vulputate, tellus ex
                condimentum augue, a finibus orci ligula ut nunc. Vivamus
                molestie accumsan est, sit amet congue urna porta ut. Sed
                lacinia mi mauris, in dignissim eros ultricies at. Nulla
                interdum ligula nec mi elementum, nec lobortis arcu faucibus.
                Cras elementum nunc id nisi sollicitudin rutrum. In rhoncus
                fermentum semper. Phasellus aliquet felis ut risus commodo
                semper. Proin sit amet condimentum turpis, ut ornare ante. Etiam
                tempor suscipit faucibus. Sed sed tempor dui. Suspendisse nec
                dui vel lorem pretium laoreet ut quis lectus. Suspendisse neque
                velit, finibus vel ante nec, vulputate feugiat arcu. Suspendisse
                mollis quis elit sit amet dignissim. Phasellus a orci ligula.
                Pellentesque nisl velit, malesuada in leo auctor, feugiat
                faucibus justo. Nulla placerat fringilla metus mattis finibus.
                Maecenas consectetur malesuada metus in facilisis. Aliquam erat
                volutpat. Aenean interdum fermentum eros vitae rutrum.
                Suspendisse tempor diam eget ex malesuada, in vulputate neque
                dictum. Fusce tincidunt id urna ac interdum. Etiam enim ante,
                blandit ut aliquam quis, finibus vel odio. Maecenas sagittis
                mattis urna. Proin et ante blandit, tristique magna quis, dictum
                nunc. Donec mollis nisi sit amet egestas maximus. Curabitur
                accumsan, leo vel cursus laoreet, mauris arcu pellentesque
                metus, ultricies vestibulum purus arcu commodo felis. Sed
                dapibus massa in massa dictum, vel sagittis nunc commodo. Nunc
                quis varius dolor, non egestas eros. Ut at dui sit amet ligula
                posuere venenatis vitae a purus. Maecenas eu vulputate dui, nec
                laoreet dui. Curabitur elementum feugiat porta. Nunc convallis
                condimentum felis a accumsan. Nam et turpis sed nibh molestie
                porttitor vel sit amet leo. Aliquam consectetur volutpat varius.
                Aenean semper, risus in feugiat sodales, dui sapien iaculis
                turpis, ut volutpat nibh elit in augue. Mauris faucibus ipsum
                sed elit ullamcorper, eu porttitor sem tincidunt. Vestibulum in
                elit nec lacus luctus suscipit nec non ante. Ut eu tellus
                finibus, laoreet turpis ut, pretium arcu. Nam nulla velit,
                hendrerit vestibulum viverra at, aliquam vitae quam. Praesent
                massa mi, ultricies nec pretium vel, interdum iaculis leo.
                Praesent id quam sed purus lobortis elementum. Duis eget
                pulvinar nibh, id interdum neque. Vivamus non malesuada turpis,
                eget finibus risus. Suspendisse imperdiet, lacus vitae ornare
                lacinia, eros augue laoreet metus, quis sodales ligula nunc ac
                arcu. Cras lobortis purus sed justo consequat, et dapibus purus
                pretium. Aenean consectetur massa ut est pulvinar aliquam. Sed
                elementum ligula ac pretium tristique. Suspendisse ultrices est
                sed pellentesque fermentum. Suspendisse tristique turpis dapibus
                sem placerat, in porta odio bibendum. Integer nec nunc ac eros
                venenatis euismod sed et leo. Vestibulum bibendum leo non dictum
                venenatis. Vivamus imperdiet, lorem quis malesuada elementum,
                nulla felis tincidunt dolor, nec facilisis purus ipsum in
                ligula. Proin et accumsan ex. Proin consectetur leo purus, vel
                consequat metus aliquam sit amet. Nulla facilisi.
              </p>
              <h3>
                Height: {windowSize[1]}
                <br />
                Width: {windowSize[0]}
              </h3>
            </div>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
