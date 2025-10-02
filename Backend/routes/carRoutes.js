import express from "express"
import { addtoCart,removeTocart,getCart } from "../controller/cartController.js"
import authMiddleware from "../middleware/auth.js";

const cartRouter =express.Router();

cartRouter.post("/add",authMiddleware,addtoCart);

cartRouter.post("/remove",authMiddleware,removeTocart);

cartRouter.post("/get",authMiddleware,getCart);

export default cartRouter;