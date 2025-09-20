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
  useEffect(() => {

    console.log(cart);
    
  }, [cart])
  
  const ContextValue = {
    food_list,
    cart,
    setcart,
    addToCart,
    removeCart,

  };

  useEffect(()=>{
    
  },[cart]);

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextData;
