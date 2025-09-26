// server.js
import express from "express";
import cors from "cors";
import { dbconnect } from "./config/db.js";
import "dotenv/config";
import {foodrouter} from "./routes/foodroute.js";




// app config
const app = express();
const port = process.env.PORT||5000;

// middleware
app.use(express.json());
app.use(cors());

// db connection 
dbconnect();

//API 
app.use("/api/food",foodrouter);
app.use("/image",express.static("uploads"))


app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
