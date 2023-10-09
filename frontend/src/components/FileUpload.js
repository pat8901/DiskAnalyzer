import React from 'react'
import axios from 'axios'

const FileUpload = () => {
  const name = 'Storage_Rep_'
  const fileLength = 22

  const between = (x, min, max) => {
    return x >= min && x <= max
  }

  // Watches for file changes and POST file to backend
  const handleFileUpload = event => {
    // Why and what is "event"?
    const file = event.target.files[0] // Why and what is target.files[0] ?
    const fileName = file.name
    let prefixStatus = false
    let yearStatus = false
    let monthStatus = false
    let dayStatus = false
    if (fileName.slice(0, -4).length === fileLength) {
      const filePrefix = fileName.substr(0, 12)
      const fileYear = fileName.substr(12, 4)
      const fileMonth = fileName.substr(17, 2)
      const fileDay = fileName.substr(20, 2)

      console.log(filePrefix)
      console.log(fileYear)
      console.log(fileMonth)
      console.log(fileDay)
      var numYear = Number(fileYear)
      var numMonth = Number(fileMonth)
      var numDay = Number(fileDay)

      console.log(file.name) // Could check on the frontend to make sure file is proper name format. cancel request if it doesnt follow the form of "Storage_Rep_YEAR-MONTH-DAY.pdf"

      console.log(fileName.slice(0, -4).length)
      console.log(fileName.length)

      if (filePrefix === name) {
        prefixStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
      if (between(numYear, 1970, 3000)) {
        yearStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
      if (between(numMonth, 1, 12)) {
        monthStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
      if (between(numDay, 1, 31)) {
        dayStatus = true
        console.log('set to true')
      } else {
        console.log('no')
      }
    } else {
      console.log('File is not the correct length')
    }

    // The code below will only run if the file has the proper name
    // The next step would be to check to make sure the contents of the file upload is correct. How would I go about checking for this on the backend/frontend
    // Creates an object that will take key:value pairs. In this case files
    if (prefixStatus && yearStatus && monthStatus && dayStatus) {
      console.log('everyone passed!')
      const formData = new FormData()
      formData.append('file', file) // Inserts the key:value pairs in the object
      // console.log('form object:')
      // console.log(formData)

      // Sends the key:value pair object to the backend
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
      {/* what is input tag? How to style it? Is there something better?*/}
      <input type='file' onChange={handleFileUpload} />
    </div>
  )
}

export default FileUpload
