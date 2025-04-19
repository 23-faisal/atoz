import Product from "../../models/product.model.js";
import errorHandler from "../../utils/errorHandler.js";

const getSingleProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product found successfully",
      product,
    });
  } catch (error) {
    next(
      errorHandler(
        error.statusCode || 500,
        error.message || "Internal server error"
      )
    );
  }
};

export default getSingleProductById;
