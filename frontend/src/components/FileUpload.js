import React from 'react'
import axios from 'axios'

// +=============================================================================+
// |                          "FileUpload" component                             |
// |     This component returns an upload button for the user to insert a file.  |
// |       The inserted file will have test ran on it to see if it is valid      |
// +=============================================================================+
const FileUpload = () => {
  const namePrefix = 'Storage_Rep_' // Known string prefix that is found in passing file uploads
  const fileLength = 22 // Known string length is passing file uploads

  // Function to see if a string length is between two values
  const between = (x, min, max) => {
    return x >= min && x <= max
  }

  // Watches for a file to be inserted into input box. The file is evaluated and POSTs to backend if it passes all tests
  const handleFileUpload = event => {
    // Why and what is "event"?
    // Grabs the file that was inserted into upload box
    const file = event.target.files[0] // Why and what is target.files[0] ?
    const fileName = file.name // Gets the name of the file

    // Debugging data
    // console.log(file.name)
    // console.log(fileName.slice(0, -4).length)
    // console.log(fileName.length)

    // Setting status flags for information found in the file's name
    let prefixStatus = false
    let yearStatus = false
    let monthStatus = false
    let dayStatus = false
    // Checking to see if length of the inserted file (disregarding the extension) matches the known length for passing files
    if (fileName.slice(0, -4).length === fileLength) {
      // If the file passes the length test then parse the string into seperate smaller strings containing it's data
      const filePrefix = fileName.substr(0, 12)
      const fileYear = fileName.substr(12, 4)
      const fileMonth = fileName.substr(17, 2)
      const fileDay = fileName.substr(20, 2)

      // Debugging data
      // console.log(filePrefix)
      // console.log(fileYear)
      // console.log(fileMonth)
      // console.log(fileDay)

      // Takes string data and turns it into their integer representation
      var numYear = Number(fileYear)
      var numMonth = Number(fileMonth)
      var numDay = Number(fileDay)

      // Checking to see if parsed data strings pass each test. If they pass the test their corresponding flag will be set to true
      // A passing file must set all flags to true in order to be accepted and sent to the backend
      // Checking if name prefix match
      if (filePrefix === namePrefix) {
        prefixStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
      // Checking to see if year range is valid. *is there a better way instead of hardcoding the year 3000*
      if (between(numYear, 1970, 3000)) {
        yearStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
      // Checking to see if month range is valid
      if (between(numMonth, 1, 12)) {
        monthStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
      // Checking to see if the month range is valid. *Not all months have 31 days, should add extra code to handle this*
      if (between(numDay, 1, 31)) {
        dayStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
    } else {
      console.log('File is not the correct length')
    }

    // The code below will only run if inserted file passes all tests

    if (prefixStatus && yearStatus && monthStatus && dayStatus) {
      // console.log('everyone passed!')
      const formData = new FormData() // Creates an object that will take key:value pairs. In this case a "file" (e.g. file that was inserted)
      formData.append('file', file) // Inserts the key:value pairs in the object
      // console.log(`form object: ${formData}`)

      // Using "axios" sending the key:value pair object to the backend
      axios
        .post('http://localhost:5000/upload', formData, {})
        .then(response => {
          console.log(response) // Who is sending response?
        })
    } else {
      console.log('not everyone passed!')
    }
  }

  return (
    <div>
      <input type='file' onChange={handleFileUpload} />
    </div>
  )
}

export default FileUpload
