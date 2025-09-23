import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";
// Create the context
export const StoreContext = createContext(null);

// Provider component
const StoreContextData = ({ children }) => {

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
  
  const ContextValue = {
    food_list,
    cart,
    setcart,
    addToCart,
    removeCart,
    gettotalCartAmount,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextData;
