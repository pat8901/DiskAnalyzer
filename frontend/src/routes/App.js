import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './home'
import Test from './test'
import About from './about'
import Search from './search'
import Imagesearch from './Imagesearch'
import User from './user'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='test' element={<Test />} />
        <Route path='about' element={<About />} />
        <Route path='search' element={<Search />} />
        <Route path='imagesearch' element={<Imagesearch />} />
        <Route path='search/user/:slug' element={<User />} />
      </Routes>
    </div>
  )
}

export default App
