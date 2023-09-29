import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './home'
import Group from './group'
import About from './about'
import Search from './search'

import User from './user'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='group' element={<Group />} />
        <Route path='about' element={<About />} />
        <Route path='search' element={<Search />} />
        <Route path='search/:slug' element={<User />} />
      </Routes>
    </div>
  )
}

export default App
