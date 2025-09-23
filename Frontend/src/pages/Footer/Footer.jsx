import './Footer.css'
import  { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-left'>
          <Link to="/" ><img src={assets.logo} alt="" /></Link>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus officia porro, at autem maxime cum hic non nesciunt eligendi inventore sit odio quisquam id, aspernatur ratione quidem provident explicabo ad?</p>
          <div className='footer-social'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-center'>
          <h1>COMPANY</h1>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-right'>
          <h1>GET IN TOUCH</h1>
          <li>+91 1234567891</li>
          <li>contact@tomato.org</li>
        </div>
      </div>
      <hr />
      <p className='footer-copy'>
        Copyright { new Date().getFullYear()} Tomato.com -All right Reserved.
      </p>
    </div>
  )
}

export default Footer