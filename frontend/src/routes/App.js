/*
Copyright (c) 2024 Patrick O'Brien-Seitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

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
