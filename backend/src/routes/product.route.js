import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import createNewProduct from "../controllers/products/createNewProduct.controller.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";

const productsRouter = Router();

// route @api/products/
// get all products

productsRouter.get("/", authMiddleware, (req, res) => {
  // Mock data for products
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];

  res.status(200).json({
    success: true,
    data: products,
  });
});

// create a new product

productsRouter.post(
  "/create-product",
  authMiddleware,
  isAdmin,
  createNewProduct
);

export default productsRouter;
