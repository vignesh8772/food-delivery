import  { useContext } from "react";
import { StoreContext } from "../../pages/Context/StoreContext";
import FoodItems from "../foodItems/foodItems";
import "./fooddisplay.css"

const FoodDispaly = ({category}) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h1 className="">Top Dishes near you!!!</h1>
      <div className="food-display-list">
        {food_list.map((items,index) => (
          <FoodItems
            key={crypto.randomUUID()}
            id={items._id}
            name={items.name}
            description={items.description}
            price={items.price}
            image={items.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDispaly;
