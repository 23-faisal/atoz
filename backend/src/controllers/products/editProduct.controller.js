import errorHandler from "../../utils/errorHandler.js";
import productSchema from "../../validator/productSchema.validator.js";
import Product from "../../models/product.model.js";

const editProduct = async (req, res, next) => {
  try {
    const product = productSchema.parse(req.body);

    const productId = req.params.id;

    const productExists = await Product.findById(productId);
    if (!productExists) {
      return next(errorHandler(404, "Product not found"));
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        ...product,
        user: req.user._id,
      },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return next(errorHandler(500, "Failed to update product"));
    }

    await updatedProduct.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
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

export default editProduct;
