import Product from "../../models/product.model.js";
import errorHandler from "../../utils/errorHandler.js";
import productSchema from "../../validator/productSchema.validator.js";

const createNewProduct = async (req, res, next) => {
  try {
    const parseData = productSchema.parse(req.body);

    const newProduct = new Product({
      ...parseData,
      user: req.user._id, //req.user._id is the ID of the authenticated user
    });


    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    next(
      errorHandler(
        error.statusCode || 500,
        error.message || "Internal Server Error"
      )
    );
  }
};

export default createNewProduct;
