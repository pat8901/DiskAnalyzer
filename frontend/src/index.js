import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './routes/App'
import { BrowserRouter } from 'react-router-dom'

// Entering frontend program
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
