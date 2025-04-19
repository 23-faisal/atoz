import Product from "../../models/product.model.js";
import errorHandler from "../../utils/errorHandler.js";

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }
    const productExists = await Product.findById(productId);
    if (!productExists) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    const deleteProduct = await Product.findByIdAndDelete(productId);

    if (!deleteProduct) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete product",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};

export default deleteProduct;
