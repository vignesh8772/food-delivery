import { useContext } from "react"
import "./placeorder.css"
import { StoreContext } from "../Context/StoreContext"
const placeorder = () => {
  const {gettotalCartAmount}=useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-left">
        <p className="title">Deilvery Info </p>
        <div className="midle-feild">
        <input type="text" placeholder="First Name" required/>
        <input type="text" placeholder="Middle Name" />
        <input type="text" placeholder="Last Name" name="" id="" required />  
        </div>
        <input type="email" placeholder="Email" required/>
        <input type="text" placeholder="Street"  required/>
        <div className="midle-feild">
          <input type="text" placeholder="city" required/>
          <input type="text" placeholder="State" name="" id=""  required/>
        </div>
        <div className="midle-feild">
          <input type="text" placeholder="Zip Code" required/>
          <input type="text" placeholder="Country" name="" id="" required />
        </div>
        <input type="tel" placeholder="phone"  required/>
      </div>
      <div className="place-right">
                <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <b>${gettotalCartAmount()}</b>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${gettotalCartAmount()==0?0:3}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${gettotalCartAmount()+(gettotalCartAmount()==0?0:3)}</b>
          </div>
          <hr />
        <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default placeorder