import "./Add.css";
import { assets } from "../../assets/admin_assets/assets";
import { useState } from "react";
import axios from "axios";
 import { toast } from "react-toastify";
const Add = () => {
  const url = "http://localhost:5000";
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const fromData = new FormData();
    fromData.append("name", data.name);
    fromData.append("description", data.description);
    fromData.append("price", Number(data.price));
    fromData.append("category", data.category);
    fromData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`,fromData)
    if (response.data.success) {
      setdata({
        name: "",
        description: "",
        price: "",
        category: "option",
      })
      setimage(false);
      toast.success(response.data.message);
    } else {
        toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form action="" className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-uploads flex-col">
          <p>Uploads</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="product name"
            required
          />
        </div>
        <div className="add-product-descrition flex-col">
          <p>prodcut descrition</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="write content here"
            id=""
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              id=""
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodle</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
