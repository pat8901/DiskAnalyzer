import React from 'react'
import './styles/SearchBarTest.css'
import { SearchResult } from './SearchResult'

export const SearchResultsList = ({ results, date }) => {
  return (
    <div className='search-results'>
      {results.map((result, id) => {
        return <SearchResult result={result} date={date} key={id} />
      })}
    </div>
  )
}
