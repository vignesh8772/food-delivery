
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/placeorder/placeorder";
import { useState } from "react";
import LoginPop from "./pages/loginPop/loginPop";
function App() {

   const [loginPop, setloginpop] = useState(false);

  return (<>
    {loginPop?<LoginPop setloginpop={setloginpop}/>:<></>}
      <div>
        <Routes>
          <Route path="/" element={<Home setloginpop={setloginpop}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pacle-order" element={<Placeorder />} />
        </Routes>
      </div>
      </>

   
  );
}

export default App;
