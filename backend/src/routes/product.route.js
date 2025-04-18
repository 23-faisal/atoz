import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import createNewProduct from "../controllers/products/createNewProduct.controller.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import editProduct from "../controllers/products/editProduct.controller.js";
import deleteProduct from "../controllers/products/deleteProduct.controller.js";

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

// edit a product

productsRouter.put("/edit-product/:id", authMiddleware, isAdmin, editProduct);

// delete a product

productsRouter.delete(
  "/delete-product/:id",
  authMiddleware,
  isAdmin,
  deleteProduct
);

export default productsRouter;
