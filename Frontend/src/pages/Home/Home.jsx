import React from 'react'
import { useState } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MenuProduct from '../MenuProduct/MenuProduct'
import FoodDispaly from '../../components/FoodDisplay/FoodDispaly';


const Home = () => {
  const [category, setcategory] = useState("all")
  return (
    <div> 
      <Header/>
      <MenuProduct category={category} setcategory={setcategory} />
    
      <FoodDispaly category={category} />
      <Footer/>
    </div>
  )
}

export default Home