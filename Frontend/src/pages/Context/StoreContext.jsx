import { createContext, useEffect, useState } from "react";
import axios from "axios";
// Create the context
export const StoreContext = createContext(null);

// Provider component
const StoreContextData = ({ children }) => {

  const url="http://localhost:5000";

  const [food_list,setfooditems]=useState([]);

  const [token,settoken]=useState();
  const [cart,setcart]=useState({});

   const addToCart = (item) => {
    if (!cart[item]) {
      setcart((prev)=>({...prev,[item]:1}))
    }
    else{
      setcart((prev)=>({...prev,[item]:prev[item]+1}))
    }
  }
 const removeCart = (item) => {
   setcart((prev)=>({...prev,[item]:prev[item]-1}))
  }
  const gettotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cart){
      if (cart[item]>0) {
        let iteminfo =food_list.find((product)=>product._id===item);
        totalAmount+= iteminfo.price*cart[item];
      }    
    }
    return totalAmount;
  }
  const fetchfood = async () => {
    const res=await axios.get(url+"/api/food/list");
    setfooditems(res.data.data)
  }
  useEffect(()=>{
    async function loading() {
      await fetchfood();
    if (localStorage.getItem("token")) {
      settoken(localStorage.getItem("token"));
    }
    }
    loading();
  },[])
  
  
  const ContextValue = {
    food_list,
    cart,
    setcart,
    addToCart,
    removeCart,
    gettotalCartAmount,
    url,token,settoken
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextData;
