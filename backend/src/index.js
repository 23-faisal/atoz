import express from "express";
import "dotenv/config";
import cors from "cors";
import connectMongoDB from "./config/connectDB.js";
import userRouter from "./routes/user.route.js";
import errorHandler from "./utils/errorHandler.js";

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

// API routes

app.use("/api/users", userRouter);

// 404 error handler

app.use((req, res, next) => {
  const error = errorHandler(404, "Not Found");
  next(error);
});

// global error handler

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

app.listen(port, async () => {
  console.log(`${process.env.NODE_ENV} server is running at port ${port}`);
  await connectMongoDB();
});
