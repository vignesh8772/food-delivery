
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/placeorder/placeorder";
import { useState } from "react";
import LoginPop from "./pages/loginPop/loginPop";
import Footer from './pages/Footer/Footer'
import { ToastContainer } from "react-toastify";
function App() {

   const [loginPop, setloginpop] = useState(false);

  return (<>
    {loginPop?<LoginPop setloginpop={setloginpop}/>:<></>}
      <div>
         <div className="size">
          <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home setloginpop={setloginpop}/>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/pacle-order" element={<Placeorder />} />
        </Routes>
        </div>
        <Footer/>
      </div>
      </>

   
  );
}

export default App;
