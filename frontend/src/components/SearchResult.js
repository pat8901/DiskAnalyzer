/*
Copyright (c) 2024 Patrick O'Brien-Seitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

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
