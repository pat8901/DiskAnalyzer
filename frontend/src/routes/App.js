import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './home'
import Group from './group'
import About from './about'
import Search from './search'
import Upload from './upload'
import User from './user'
import UserDynamic from './userDynamic'
import PageNotFound from './pageNotFound'

// +=============================================================================+
// |                     App that is called from index.js                        |
// |                        Holds the routes (pages)                             |
// +=============================================================================+
function App () {
  return (
    <div>
      {/* The available routes users can navigate to */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='group' element={<Group />} />
        <Route path='about' element={<About />} />
        <Route path='upload' element={<Upload />} />
        <Route path='search' element={<Search />} />
        <Route path='search/:slug' element={<User />} />
        {/* <Route path='search/:date/:slug' element={<UserDynamic />} /> */}
        <Route path='search/:year/:month/:slug' element={<UserDynamic />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
