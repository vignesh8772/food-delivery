import userModel from "../models/usermodel.js";
//add items to user cart
const addtoCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    let userData = await userModel.findById(userId);

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    let cartData = userData.cartData;

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData: cartData });

    res.json({
      success: true,
      message: "Add to cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const removeTocart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    let userData = await userModel.findById(userId);

    if (!userData) {
      res.json({
        success: false,
        message: "User not found",
      });
    }

    let cartData = await userData.cartData;

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData: cartData });

    res.json({
      success: true,
      message: "Remove from cart!!!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
//fetch data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({
      success: true,
      message: "Cart data",
      cartData
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export { addtoCart, removeTocart, getCart };