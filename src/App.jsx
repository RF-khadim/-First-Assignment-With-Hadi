import { Route, Routes } from 'react-router-dom'
import Home from './assets/Common/home'
import Login from './assets/Common/login'
import Recovery from './assets/Common/recovery'
import Cart from './assets/Common/cart'
import BlogDetails from './assets/Common/blogDetails'
import Register from './assets/Common/register'
import CoupleOutfits from './assets/Common/Categories/coupleOutfits'
import Men from './assets/Common/Categories/men'
import Caps from './assets/Common/Categories/caps'
import Googles from './assets/Common/Categories/googles'
import Headphones from './assets/Common/Categories/headphones'
import Women from './assets/Common/Categories/women'
import NewPassword from './assets/Common/newPassword'
import store from './assets/store/store'
import { Provider } from 'react-redux'
import AdminPanel from './assets/Panel/Admin/adminPanel'
import AddProduct from './assets/Panel/Admin/Dashboard/addProduct'





function App() {


  return (
    <>
      <Provider store={store}>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/newPassword' element={<NewPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recovery' element={<Recovery />} />
          <Route path='/blogDetails' element={<BlogDetails />} />
          <Route path='/coupleOutfits' element={<CoupleOutfits />} />
          <Route path='/women' element={<Women />} />
          <Route path='/men' element={<Men />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/caps' element={<Caps />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/googles' element={<Googles />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
