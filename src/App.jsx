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
import AdminProduct from './assets/Panel/Admin/Dashboard/AdminPages/adminProduct'
import Activity from './assets/Panel/Admin/Dashboard/AdminPages/activity'
import Orders from './assets/Panel/Admin/Dashboard/AdminPages/orders'
import Logout from './assets/Panel/Admin/Dashboard/AdminPages/logout'
import Users from './assets/Panel/Admin/Dashboard/AdminPages/users'
import Setting from './assets/Panel/Admin/Dashboard/AdminPages/setting'
import Transactions from './assets/Panel/Admin/Dashboard/AdminPages/transactions'
import Dashboard from './assets/Panel/Admin/Dashboard/AdminPages/dashboard'





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
          <Route path='/googles' element={<Googles />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/adminproduct' element={<AdminProduct />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/users' element={<Users />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/dashboard' element={<Dashboard />} />

          

        </Routes>
      </Provider>
    </>
  )
}

export default App
