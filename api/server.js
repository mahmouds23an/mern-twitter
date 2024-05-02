import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// middlewares
app.use("/api/auth", authRoutes);

// for deployment
app.get("/", (req, res) => {
  res.status(200).json("Server is ready");
});

// for listening
app.listen(PORT, () => {
  console.log("API Working...");
  connectMongoDB();
});
