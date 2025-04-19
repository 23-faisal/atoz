import Product from "../../models/product.model.js";
import errorHandler from "../../utils/errorHandler.js";

const getBestSellerProduct = async (req, res, next) => {
  try {
    const bestSellerProduct = await Product.find()
      .sort({ rating: -1 })
      .limit(4);

    if (!bestSellerProduct) {
      return next(errorHandler(404, "Product not found"));
    }

    res.status(200).json({
      success: true,
      message: "Best seller products found successfully",
      bestSellerProduct,
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

export default getBestSellerProduct;
