import { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./loginPop.css"
import { StoreContext } from '../Context/StoreContext'
import axios from "axios"

const loginPop = ({setloginpop}) => {

  const {url,token,settoken}=useContext(StoreContext);
    const [current, setcurrent] = useState("Signup");
    const [data, setdata] = useState({
      name:"",
      email:"",
      password:"",
    });

    const onChangeHandeler = (event) => {
      const name=event.target.name;
      const value=event.target.value;
      setdata(data=>({...data,[name]:value}))
    }
    
    
  const onLogin = async (event) => {
    event.preventDefault()
    let newurl=url;
    if (current==="login") {
      newurl+="/api/user/login";
    }
    else{
      newurl+="/api/user/register";
    }
    const response=await axios.post(newurl,data)
    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setloginpop(false)
    }else{
      alert(response.data.message)
    }
    }
    
    
  return (
    <div className='login-pop'>  
        <form onSubmit={onLogin} className='login-from'>
           <div className="login-title">
            <h2>{current}</h2>
            <img  onClick={()=>{setloginpop(false)}} src={assets.cross_icon} alt="" />
           </div>
           <div className='loginpop-input'>
            {current==="login"?<></>:<><label name="name">Enter your Name</label>
            <br />
            <input type="text" placeholder='YOur name'name="name" onChange={onChangeHandeler} value={data.name} required /><br /></>}
            
            <label name="name">Enter your Eamil</label>
            <br />
            <input type="email" placeholder='^Your Email' required name="email" onChange={onChangeHandeler} value={data.email}  /><br />
            <label name="name">Enter your Password</label>
            <br />
            <input type="password" placeholder='PAssWord' required name="password" onChange={onChangeHandeler} value={data.password}  /><br />
           </div>
           <button className='btn' type='submit'>{current==="Sign up "?"Create a account":"login"}</button>
              <div className="login-condition">
                <input type="checkbox" required name="" id="" />
                <p>By countinuing , i agree to the terms of use & privacy policy.</p>
              </div>
              {current==="login"?
               <p>Create a new Account ? <span onClick={()=>{setcurrent("signup")}}>Click here</span></p>:
                <p>Already have an account? <span onClick={()=>{setcurrent("login")}}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default loginPop