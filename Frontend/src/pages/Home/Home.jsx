import Navba from "../../components/nav";
import { useState } from "react";
import Header from '../Header/Header'
import MenuProduct from '../MenuProduct/MenuProduct'
import FoodDispaly from '../../components/FoodDisplay/FoodDispaly';
import AppDownload from '../../components/AppDownload/AppDownload';


const Home = ({setloginpop}) => {
  const [category, setcategory] = useState("All")
  return (
    <>
    <div  className="size"> 
      <Navba setloginpop={setloginpop}/>
      <Header/>
      <MenuProduct category={category} setcategory={setcategory} />
      <FoodDispaly category={category} />
      <AppDownload/>
    </div>
    </>

  )
}

export default Home