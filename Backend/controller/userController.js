import userModel from "../models/usermodel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Create Token
const createToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Name, email, and password are required." });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    if (!validator.isEmail(normalizedEmail)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email." });
    }

    if (typeof password !== "string" || password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters." });
    }

    const exist = await userModel.findOne({ email: normalizedEmail });
    if (exist) {
      return res.status(409).json({ success: false, message: "User already exists." });
    } 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: String(name).trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.status(201).json({ success: true, token });
  } catch (error) {
    if (error && (error.code === 11000 || error.code === "11000")) {
      return res.status(409).json({ success: false, message: "User already exists." });
    }
    console.error("registerUser error:", error);
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Login User  
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);
  
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    const token = createToken(user._id);
    return res.json({ success: true, token });
  } catch (error) {
    console.error("loginUser error:", error);
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export { loginUser, registerUser };
