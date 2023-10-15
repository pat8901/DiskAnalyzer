import React from 'react'

export const Calender = ({ onQuery }) => {
  var today = new Date()
  var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0
  var dd = String(today.getDate()).padStart(2, '0')
  var year = today.getFullYear()
  // const [date, setDate] = useState(`${year}-${mm}-${dd}`)

  // function handleInput (e) {
  //   onQuery(e.target.value)
  //   console.log(`e: ${e.target.value}`)
  // }
  const handleInput = e => {
    onQuery(e.target.value)
    console.log(`e: ${e.target.value}`)
  }

  return (
    <>
      {/* <input type='date' onChange={e => setDate(e.target.value)} /> */}
      <input
        type='date'
        onChange={handleInput}
        defaultValue={`${year}-${mm}-${dd}`} // Is there a more proper way to set this value?
      // onChange={e => {
      //   setDate(e.target.value)
      // }}
      />
    </>
  )
}
