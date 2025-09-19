import Navba from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/placeorder/placeorder";
function App() {
  return (
   

      <div className="size">
        <Navba />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pacle-order" element={<Placeorder />} />
        </Routes>
      </div>

   
  );
}

export default App;
