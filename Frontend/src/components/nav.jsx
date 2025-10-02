import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../pages/Context/StoreContext';
import "./nav.css";
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react"; // icons for hamburger/close

const Nav = ({ setloginpop }) => {
  const [menu, setmenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // mobile menu state
  const { gettotalCartAmount,token,settoken } = useContext(StoreContext);
  const nagi=useNavigate();
  
  // ? refresh and pass the token 
  useEffect(()=>
    {
      let testtoken=localStorage.getItem("token");
      settoken(testtoken);
  },[])

  const Logout = () => {
    localStorage.removeItem("token")
    settoken("");
  }
  

  return (
    <nav className="nav w-full shadow-sm px-4 py-3 flex justify-between items-center bg-white">
      
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-[120px] md:w-[150px]" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none gap-10 text-[#248cee] text-lg cursor-pointer">
        {["Home", "Menu", "Mobile", "Contact", "About"].map((item) => (
          <li
            key={item}
            onClick={() => setmenu(item)}
            className={`${menu === item ? "border-b-2 border-teal-500" : ""} hover:text-cyan-600`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Right side (icons + button) */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="search_icon" className="cursor-pointer w-6 h-6" />
        <div className="relative">
          <Link to="/Cart">
            <img
              src={assets.basket_icon}
              alt="basket_icon"
              title="goes to cart"
              className="cursor-pointer w-7 h-7"
            />
          </Link>
          {/* Dot indicator */}
          {gettotalCartAmount() !== 0 && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          )}
        </div>
        {!token?
        <button
          className="hidden md:block bg-transparent text-sm text-[#248cee] border-2 border-[#248cee] px-4 py-1.5 rounded-3xl cursor-pointer hover:bg-cyan-50 duration-300"
          onClick={() => setloginpop(true)}
        >
          Sign in
        </button>
        :
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="profile_icon" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="Order" title='Order' />Order</li>
            <hr />
            <li onClick={Logout}><img src={assets.logout_icon} alt="Logout" title='Logout' />Logout</li>
          </ul>
        </div>
        }

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          {["Home", "Menu", "Mobile", "Contact", "About"].map((item) => (
            <p
              key={item}
              onClick={() => {
                setmenu(item);
                setIsOpen(false); // close menu when clicking
              }}
              className={`${menu === item ? "text-cyan-600 font-bold" : "text-[#248cee]"} cursor-pointer text-lg`}
            >
              {item}
            </p>
          ))}
          {!token?
          <button
            className="bg-transparent text-sm text-[#248cee] border-2 border-[#248cee] px-10 py-1.5 rounded-3xl cursor-pointer hover:bg-cyan-50 duration-300"
            onClick={() => {
              setloginpop(true);
              setIsOpen(false);
            }}
          >
            Sign in
          </button>:
          <div className='navbar-profile-moblie'>
            <img src={assets.profile_icon} alt="profile" />
            <ul className="nav-profile-dropdown-mobile">
              <li><img src={assets.bag_icon} alt="Order" title='Order' /></li>
              <hr />
              <li><img src={assets.logout_icon} alt="Logout" title='Logout' /></li>
            </ul>
          </div>}
        </div>
      )}
    </nav>
  );
};

export default Nav;
