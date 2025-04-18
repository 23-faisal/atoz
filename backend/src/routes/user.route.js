import { Router } from "express";
import registerUser from "../controllers/user.controller.js";

const userRouter = Router();

export default userRouter;

// route @api/users/

// register user

userRouter.post("/register", registerUser);
