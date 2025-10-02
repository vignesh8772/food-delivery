import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./fooditems.css";
import { StoreContext } from "../../pages/Context/StoreContext";

const FoodItems = ({ id, name, description, price, image }) => {
  const { cart, addToCart, removeCart,url } = useContext(StoreContext);

  return (
    <div className="food-items">
      <div className="food-items-img-container">
        <img className="food-items-img" src={url+"/image/"+image} alt={name} />
        {!cart[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="add-count">
            <img
              onClick={() => removeCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cart[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-items-info">
        <div className="food-items-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <div className="food-items-description">
          <p>{description}</p>
          <div className="food-items-price">${price}</div>
        </div>
      </div>
    </div>
  );
};
export default FoodItems;
