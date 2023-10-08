import React from 'react'
import axios from 'axios'

const FileUpload = () => {
  // Watches for file changes and POST file to backend 
  const handleFileUpload = event => { // Why and what is "event"?
    const file = event.target.files[0] // Why and what is target.files[0] ?
    console.log("file:")
    console.log(file)

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
