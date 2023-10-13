import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/SearchResult.css'

// I need to pass the date into here some how
export const SearchResult = ({ result, date }) => {
  let navigate = useNavigate()
  const year = date.substring(0, 4)
  const month = date.substring(5)

  const routeChange = route => {
    // let path = `${date}/${route}`
    let path = `${year}/${month}/${route}`
    console.log(`route: ${route}`)
    console.log(`path: ${path}`)
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
