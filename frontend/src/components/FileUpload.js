import React from 'react'
import axios from 'axios'

const FileUpload = () => {
  const handleFileUpload = event => {
    const file = event.target.files[0]

    const formData = new FormData()
    formData.append('file', file)

    axios.post('http://localhost:5000/upload', formData, {}).then(response => {
      console.log(response)
    })
  }
  return (
    <div>
      <input type='file' onChange={handleFileUpload} />
    </div>
  )
}

export default FileUpload
