import mongoose, { type } from "mongoose";

const foodSchema= new mongoose.Schema({
    name:{type:String,require:true},
    description :{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
    category:{type:String,require:true},
})
const foodmodel=mongoose.model("food",foodSchema) || mongoose.model.food ;

export default foodmodel;