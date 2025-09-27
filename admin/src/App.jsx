import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import Add from "./pages/Add/Add"
import List from './pages/List/List.jsx'
import Order from './pages/Orders/Order.jsx'
import {Routes,Route} from "react-router-dom"
import {ToastContainer} from 'react-toastify'

const admin = () => {
  return (<div>
    <ToastContainer/>
    <Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </div>
  </div>
  )
}

export default admin