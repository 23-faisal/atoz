import Product from "../../models/product.model.js";
import errorHandler from "../../utils/errorHandler.js";

const getSimilarProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const similarProduct = await Product.find({
      _id: { $ne: id }, //exclude the current product id
      gender: product.gender,
      category: product.category,
    }).limit(4);

    res.status(200).json({
      success: true,
      message: "Similar product found successfully",
      similarProduct,
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

export default getSimilarProduct;
