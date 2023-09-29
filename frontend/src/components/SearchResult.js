import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchResult.css'

export const SearchResult = ({ result }) => {
  let navigate = useNavigate()
  const routeChange = route => {
    let path = route
    navigate(path)
  }

  return (
    <div
      className='search-result'
      onClick={e => {
        routeChange(`${result}`)
      }}
    >
      {result}
    </div>
  )
}
