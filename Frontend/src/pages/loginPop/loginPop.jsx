import { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./loginPop.css"

const loginPop = ({setloginpop}) => {

    const [current, setcurrent] = useState("Sign up")
  return (
    <div className='login-pop'>  
        <form className='login-from'>
           <div className="login-title">
            <h2>{current}</h2>
            <img  onClick={()=>{setloginpop(false)}} src={assets.cross_icon} alt="" />
           </div>
           <div className='loginpop-input'>
            {current==="login"?<></>:<><label name="name">Enter your Name</label>
            <br />
            <input type="text" placeholder='YOur name'name="name" required /><br /></>}
            
            <label name="name">Enter your Eamil</label>
            <br />
            <input type="email" placeholder='^Your Email' required name=""  /><br />
            <label name="name">Enter your Password</label>
            <br />
            <input type="password" placeholder='PAssWord' required name=""  /><br />
           </div>
           <button className='btn'>{current==="Sign up "?"Create a account":"login"}</button>
              <div className="login-condition">
                <input type="checkbox" required name="" id="" />
                <p>By countinuing , i agree to the terms of use & privacy policy.</p>
              </div>
              {current==="login"?
               <p>Create a new Account ? <span onClick={()=>{setcurrent("sign up")}}>Click here</span></p>:
                <p>Already have an account? <span onClick={()=>{setcurrent("login")}}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default loginPop