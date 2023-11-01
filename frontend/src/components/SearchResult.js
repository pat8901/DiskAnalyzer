import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/SearchResult.css'

// +=============================================================================+
// |                       "SearchResults" component                             |
// |  This component creates individule results for each result that was passed  |
// |  down from "Searchbar"->"Search"->"SearchResultsList"->"SearchResults"      |
// +=============================================================================+
// I need to pass the date into here some how. *what data? the date filter?*
export const SearchResult = ({ result, date }) => {
  // Instaniating a navigation object that will allow navigation to other pages
  let navigate = useNavigate()
  // "date" was passed down to "SearchResults" from the parent node "SearchResultsList"
  const year = date.substring(0, 4) // Getting the year by parsing the date
  const month = date.substring(5) // Getting month by parsing the date

  // This function runs when a result *object?* is clicked on
  // This results in routing to a different page based on result data clicked on.
  const routeChange = route => {
    let path = `${year}/${month}/${route}` // generating new path based on result clicked on
    console.log(`route: ${route}`)
    console.log(`path: ${path}`)
    navigate(path) // Naviating to the new generated path
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
