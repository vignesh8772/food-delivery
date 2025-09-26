import express from "express"
import {addFood,listfood,Unqielistfood,Removeitems} from "../controller/foodcontroller.js";
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
foodrouter.get("/list",listfood)
foodrouter.get("/unlist",Unqielistfood)
foodrouter.post("/remove",Removeitems);


export  {foodrouter}