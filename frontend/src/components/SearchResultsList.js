import React from 'react'
import { SearchResult } from './SearchResult'
import './styles/SearchBarTest.css'

// +=============================================================================+
// |                       "SearchResultsList" component                         |
// |                  Gets list of results passsed down from                     |
// |                "SearchBar"->"Search"->"SearchResultsList"                   |
// |         Each result is mapped to a seperate entity creating a list of       |
// |                   results where result is self contained.                   |
// +=============================================================================+
export const SearchResultsList = ({ results, date }) => {
  return (
    <div className='search-results'>
      {results.map((result, id) => {
        return <SearchResult result={result} date={date} key={id} />
      })}
    </div>
  )
}
