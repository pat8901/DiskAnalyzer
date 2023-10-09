import React from 'react'
import axios from 'axios'

const FileUpload = () => {
  // Watches for file changes and POST file to backend 
  const handleFileUpload = event => { // Why and what is "event"?
    const file = event.target.files[0] // Why and what is target.files[0] ?
    console.log("file:")
    console.log(file.name) // Could check on the frontend to make sure file is proper name format. cancel request if it doesnt follow the form of "Storage_Rep_YEAR-MONTH-DAY.pdf"
    console.log(file)

    // The code below will only run if the file has the proper name
    // The next step would be to check to make sure the contents of the file upload is correct. How would I go about checking for this on the backend/frontend
    // Creates an object that will take key:value pairs. In this case files
    const formData = new FormData()
    formData.append('file', file) // Inserts the key:value pairs in the object
    console.log("form object:")
    console.log(formData)
    console.log("---------------->")


    // Sends the key:value pair object to the backend
    axios.post('http://localhost:5000/upload', formData, {}).then(response => {
      console.log(response) // Who is sending response?
    })
  }
  return (
    <div>
      {/* what is input tag? How to style it? Is there something better?*/}
      <input type='file' onChange={handleFileUpload} />
    </div>
  )
}

export default FileUpload
