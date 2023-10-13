import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './home'
import Group from './group'
import About from './about'
import Search from './search'
import Upload from './upload'
import User from './user'
import UserDynamic from './userDynamic'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='group' element={<Group />} />
        <Route path='about' element={<About />} />
        <Route path='upload' element={<Upload />} />
        <Route path='search' element={<Search />} />
        <Route path='search/:slug' element={<User />} />
        {/* <Route path='search/:date/:slug' element={<UserDynamic />} /> */}
        <Route path='search/:year/:month/:slug' element={<UserDynamic />} />
      </Routes>
    </div>
  )
}

export default App
