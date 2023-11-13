// Copyright (C) 2023  Patrick O'Brien-Seitz

// This file is part of frontend.

// frontend is free software: you can redistribute it and/or modify it under the terms of the GNU General
// Public License as published by the Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.

// frontend is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
// the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along with frontend.
// If not, see <https://www.gnu.org/licenses/>.

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
