import errorHandler from "../../utils/errorHandler.js";
import Product from "../../models/product.model.js";

const getNewArrivalsProduct = async (req, res, next) => {
  try {
    const newArrivals = await Product.find()
      .sort({
        createdAt: -1,
      })
      .limit(8);

    if (!newArrivals) {
      return res.status(404).json({
        success: false,
        message: "Could not found new arrivals",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully found new arrivals product",
      newArrivals,
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

export default getNewArrivalsProduct;
