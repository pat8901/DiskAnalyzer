import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './home'
import Test from './test'
import About from './about'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='test' element={<Test />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
