import  { useContext } from 'react'
import {StoreContext} from '../Context/StoreContext'
import "./cart.css"
import { food_list } from '../../assets/frontend_assets/assets';
import {useNavigate} from "react-router-dom"
import {toast}from "react-toastify"
const Cart = () => {
  const {cart,addToCart,removeCart,gettotalCartAmount} = useContext(StoreContext);
  const nagivation=useNavigate();
  return (
    <div className='cart'>
      <div className='cartitems'>
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr  />
        {
          food_list.map((Items)=>{
            if (cart[Items._id]>0) {
              return(
                <div key={crypto.randomUUID()}>
                <div className='cart-title cart-items'>
                  <img src={Items.image} alt={Items.name} />
                  <p>{Items.name}</p>
                  <p>${Items.price}</p>
                  <p>{cart[Items._id]}</p>
                  <p>${Number(cart[Items._id]*Items.price).toFixed(2)}</p>
                  <p onClick={()=>{removeCart(Items._id)}} className='cross'>X</p>
                </div>
                <hr /></div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
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
        <button  onClick={()=>{if(gettotalCartAmount()==0)
        {nagivation('/Cart') 
          toast.warn("Add to Cart");
        }
        else
          {nagivation('/pacle-order')}
        }}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <div className="promocode">
        <div>
          <p>If you have a promo code, enter it here </p>
          <div className='promocode-input'>
            <input type="text"placeholder='Promo code ' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart