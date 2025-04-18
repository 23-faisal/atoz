import express from "express";
import "dotenv/config";
import cors from "cors";
import connectMongoDB from "./config/connectDB.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the backend server",
  });
});

app.listen(port, async () => {
  console.log(`${process.env.NODE_ENV} server is running at port ${port}`);
  await connectMongoDB();
});
