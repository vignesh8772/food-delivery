import "./navbar.css"
import { assets } from "../../assets/admin_assets/assets.js"
import { NavLink } from "react-router-dom"
const navbar = () => {
  return (
    <div className="navbar">
      <NavLink  to="/" >
      <img className="logo" src={assets.logo} alt=""/>
      </NavLink>  
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  )
}

export default navbar