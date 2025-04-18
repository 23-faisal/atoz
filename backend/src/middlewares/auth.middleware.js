import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // check if the user exists

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized, user not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

export default authMiddleware;
