import { Router } from "express";
import registerUser, {
  getUserProfile,
  loginUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = Router();

export default userRouter;

// route @api/users/

// register user

userRouter.post("/register", registerUser);

// login user

userRouter.post("/login", loginUser);

// profile

userRouter.get("/profile", authMiddleware, getUserProfile);
