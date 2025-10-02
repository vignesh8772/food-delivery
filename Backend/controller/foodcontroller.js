import foodmodel from "../models/foodmodel.js"; // or { foodmodel } if it's a named export
import fs from "fs";
// Add food item
const addFood = async (req, res) => {
    try {
        let image_filename = req.file ? req.file.filename : null;

        const food = new foodmodel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        await food.save();

        res.json({
            success: true,
            message: "Food added successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

//add food list
const listfood=async(req,res)=>{
    try {
        const food=await foodmodel.find({});
        res.json({
            success:true,
            data:food
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
        
    }
}

const uniquelistfood=async(req,res)=>{
    try {
        const single=await foodmodel.findById(req.body.id);
        res.json({
            success:true,
            data:single,
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error,
        })
        
    }
}

 const Removeitems = async (req,res) => {
    try {
        const food=await foodmodel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodmodel.findByIdAndDelete(req.body.id)
        res.json({
            success:true,
            message:"Food Remove"
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false
        })
    }

}

export { addFood,listfood,uniquelistfood,Removeitems}