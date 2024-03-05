import { Route, Routes } from 'react-router-dom'
import Home from './assets/Common/home'
import Login from './assets/Common/login'
import BlogDetails from './assets/Common/blogDetails'
import Register from './assets/Common/register'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogDetails' element={<BlogDetails />} />
      </Routes>
    </>
  )
}

export default App
