// Copyright (C) 2023  Patrick O'Brien-Seitz

// This file is part of frontend.

// frontend is free software: you can redistribute it and/or modify it under the terms of the GNU General 
// Public License as published by the Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.

// frontend is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
// the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along with Foobar. 
// If not, see <https://www.gnu.org/licenses/>.

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
