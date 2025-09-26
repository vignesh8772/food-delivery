import "./Add.css"
import { assets } from "../../assets/admin_assets/assets"
import { useState } from "react"
const Add = () => {
    const [image, setimage] = useState(false)
  return (
    <div className="add">
        <form action="" className="flex-col">
            <div className="add-img-uploads flex-col">
                <p>Uploads</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""  />
                </label>
                <input onChange={(e)=>setimage(e.target.files[0])} type="file" id="image"  hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>product name</p>
                <input type="text" name="name" placeholder="product name" />
            </div>
            <div className="add-product-descrition flex-col">
                <p>prodcut descrition</p>
                <textarea name="description" rows="6" placeholder="write content here" id=""></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select name="category" id="">
                        <option value="">Select Option</option>
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
                    <input type="Number" name="price" placeholder="$20" />
                </div>
            </div>
            <button type="submit" className="btn">Add</button>
        </form>
    </div>
  )
}

export default Add