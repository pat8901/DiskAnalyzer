import React, { useState, useEffect } from 'react'

export const Calender = () => {
  var today = new Date()
  var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0
  var dd = String(today.getDate()).padStart(2, '0')
  var year = today.getFullYear()
  const [date, setDate] = useState(`${year}-${mm}-${dd}`)

  console.log(`date: ${date}`)
  console.log(`Real time Date: ${today}`)
  console.log(`Real time month: ${mm}`)
  console.log(`Real time day: ${dd}`)
  console.log(`Real time year: ${year}`)

  return (
    <>
      <h3>calender</h3>
      {/* <input type='date' onChange={e => setDate(e.target.value)} /> */}
      <input
        type='date'
        onChange={e => {
          setDate(e.target.value)
        }}
        // onChange={e => {
        //   setDate(e.target.value)
        // }}
      />
    </>
  )
}
