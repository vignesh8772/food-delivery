import express from "express"
import addFood from "../controller/foodcontroller.js";
import multer from "multer"

const foodrouter=express.Router();

//image Storage engine 

const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,filename,cb)=>{
        return cb(null,`${ Date.now()} ${filename.originalname}`);
    },
})
const uploads=multer({storage:storage})

foodrouter.post("/add", uploads.single("image"), addFood);

// foodrouter.route("/add").post(uploads.single("image"),foodmodel)



export default foodrouter;