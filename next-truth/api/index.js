import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/dbConnect.js";
connectDB();
import express from "express";
const app = express();
app.listen(process.env.PORT || 8080, () => {
  console.log(`server is runing on port ${process.env.PORT}`);
});
