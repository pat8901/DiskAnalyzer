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
import './styles/calender.css'

// +=============================================================================+
// |                            "Calender" component                             |
// |       This component returns a calender where the user can pick a date.     |
// |     The user's selection filters the storage reports by the selected date   |
// +=============================================================================+
export const Calender = ({ onQuery }) => {
  // Parsing the date into month, day, and year
  var today = new Date()
  var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0
  var dd = String(today.getDate()).padStart(2, '0')
  var year = today.getFullYear()

  // When a change is detected this function runs which sets "onQuery" to the selected date
  // "onQuery" is then passed as a prop to it's parent "Search" found in "search.js"
  const handleInput = e => {
    onQuery(e.target.value)
    // console.log(`e: ${e.target.value}`)
  }

  return (
    <div>
      <input
        className='calender'
        type='date'
        onChange={handleInput}
        defaultValue={`${year}-${mm}-${dd}`}
      />
    </div>
  )
}
