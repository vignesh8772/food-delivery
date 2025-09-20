import { assets } from '../assets/frontend_assets/assets';
import "./nav.css"
import { useState } from 'react';

const Nav = ({setloginpop}) => {
  const [menu, setmenu] = useState("Home");
  return (
    <div className='nav'>
      
            <img src={assets.logo} alt="" className='w-[150px]' />  
            <ul className='flex list-none gap-10 text-[#248cee] text-2xl cursor-pointer'>
                <li onClick={()=>{
                  setmenu("Home")
                }} className= {menu == "Home" ? "active:bg-red-600 border-b-2 border-b-teal-500":""}>Home</li>
                
                <li  onClick={()=>{
                  setmenu("Menu")
                }}className= {menu == "Menu" ? "active:bg-red-600 border-b-2 border-b-teal-500":""}>Menu</li>  
                <li onClick={()=>{
                  setmenu("Mobile")
                }} className= {menu == "Mobile" ? "active:bg-red-600 border-b-2 border-b-teal-500":""}>Mobile</li>
                <li onClick={()=>{
                  setmenu("Contact")
                }} className= {menu == "Contact" ? "active:bg-red-600 border-b-2 border-b-teal-500":""}>Contact</li>
                <li onClick={()=>{
                  setmenu("About")
                }} className= {menu == "About" ? "active:bg-red-600 border-b-2 border-b-teal-500":""}>About</li>
                
            </ul>
            <div className='gap-10 flex items-center '>
                <img src={assets.search_icon} alt="search_icon" className='cursor-pointer' />
                <div>
                    <img src={assets.basket_icon} alt="basket_icon" title='goes to cart' className='cursor-pointer' />
                    <div className=''></div>
                </div>
                <button className='bg-transparent text-[16px] text-[#248cee] border-2 border-[#248cee] w-18 h-8 rounded-3xl p-2.5 cursor-pointer hover:bg-cyan-50 duration-300' 
                onClick={()=>(setloginpop(true))}>sign in</button>
            </div>
    </div>
  )
}
export default Nav