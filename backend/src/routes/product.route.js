import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import createNewProduct from "../controllers/products/createNewProduct.controller.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import editProduct from "../controllers/products/editProduct.controller.js";
import deleteProduct from "../controllers/products/deleteProduct.controller.js";
import getAllProducts from "../controllers/products/getAllProduct.controller.js";
import getSingleProductById from "../controllers/products/singleProduct.controller.js";
import getSimilarProduct from "../controllers/products/getSimilarProduct.controller.js";
import getBestSellerProduct from "../controllers/products/getBestSellerProduct.controller.js";
import getNewArrivalsProduct from "../controllers/products/newArrivalsProduct.controller.js";

const productsRouter = Router();

// route @api/products/all-products
// @desc get all products

productsRouter.get("/all-products/", getAllProducts);

// get best seller product

productsRouter.get("/best-seller", getBestSellerProduct);

// get similar product

productsRouter.get("/similar-product/:id", getSimilarProduct);

// new arrivals product

productsRouter.get("/new-arrivals", getNewArrivalsProduct);

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

// get single product by id

productsRouter.get("/:id", getSingleProductById);

export default productsRouter;
