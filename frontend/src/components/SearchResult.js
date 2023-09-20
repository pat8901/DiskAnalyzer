import React from 'react'
import './SearchResult.css'

export const SearchResult = ({ result }) => {
  //const HandleSumbit = e => {
  //   const message = { result }
  //   fetch('http://localhost:5000/getUser', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(message)
  //   }).then(() => {
  //     console.log(message)
  //   })
  //}
  return (
    <div
      className='search-result'
      onClick={e => {
        alert(`You clicked on ${result}`)
        const message = { result }
        fetch('http://localhost:5000/getUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(message)
        }).then(() => {
          console.log(message)
        })
      }}
    >
      {result}
    </div>
  )
}
