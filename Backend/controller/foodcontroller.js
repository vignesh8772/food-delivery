import foodmodel from "../models/foodmodel.js"; // or { foodmodel } if it's a named export

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

export default addFood;
