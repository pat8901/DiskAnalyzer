import React from 'react'
import './SearchBarTest.css'
import { SearchResult } from './SearchResult'

export const SearchResultsList = ({ results }) => {
  return (
    <div className='search-results'>
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />
      })}
    </div>
  )
}
