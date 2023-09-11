import React, { useState } from 'react'
import './SearchBarTest.css'

export const SearchBarTest = () => {
  const [query, setQuery] = useState('')
  const users = ['joe', 'jeff', 'pat', 'tim', 'sam', 'bill', 'ash']

  const filteredItems = users.filter(user => {
    return user.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <>
      Search:{' '}
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type='search'
      />
      <h3 className='users'>Users:</h3>
      {filteredItems.map(user => (
        <div className='users'>{user}</div>
      ))}
    </>
  )
}
