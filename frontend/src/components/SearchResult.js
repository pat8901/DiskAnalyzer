import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchResult.css'

export const SearchResult = ({ result }) => {
  //const HandleSumbit = e => {
  //   const message = { result }
  //   fetch('http://localhost:5000/getUser', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(message)
  //   }).then(() => {
  //     console.log(message)
  //   })
  //}
  let navigate = useNavigate()
  const routeChange = route => {
    console.log(route)
    let path = 'user/' + route
    navigate(path)
  }

  return (
    <div
      className='search-result'
      onClick={e => {
        alert(`You clicked on ${result}`)
        //const message = { result }
        // fetch('http://localhost:5000/getUser', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(message)
        // }).then(() => {
        //   console.log(message)
        // })
        routeChange(`${result}`)
      }}
    >
      {result}
    </div>
  )
}
