// Copyright (C) 2023  Patrick O'Brien-Seitz

// This file is part of frontend.

// frontend is free software: you can redistribute it and/or modify it under the terms of the GNU General 
// Public License as published by the Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.

// frontend is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
// the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along with Foobar. 
// If not, see <https://www.gnu.org/licenses/>.

import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './home'
import Group from './group'
import About from './about'
import Search from './search'
import Upload from './upload'
// import User from './user'
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
        {/* <Route path='search/:slug' element={<User />} />  !Deprecated! */}
        {/* <Route path='search/:date/:slug' element={<UserDynamic />} /> */}
        <Route path='search/:year/:month/:slug' element={<UserDynamic />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
