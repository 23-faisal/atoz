import Product from "../../models/product.model.js";
import errorHandler from "../../utils/errorHandler.js";

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
// @query   collection, size, color

const getAllProducts = async (req, res, next) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      search,
      category,
      material,
      brand,
      limit,
      sortBy,
    } = req.query;

    let query = {};

    // filter logic

    if (collection && collection.toLowerCase() !== "all") {
      query.collection = collection;
    }

    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    if (material && material.toLowerCase() !== "all") {
      query.material = { $in: material.split(",") };
    }
    if (brand && brand.toLowerCase() !== "all") {
      query.brand = { $in: brand.split(",") };
    }

    if (size && size.toLowerCase() !== "all") {
      query.size = { $in: size.split(",") };
    }

    if (color && color.toLowerCase() !== "all") {
      query.color = { $in: [color] };
    }

    if (gender && gender.toLowerCase() !== "all") {
      query.gender = gender;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }
      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    if (search) {
      const searchRegex = { $regex: search, $options: "i" };
      query.$or = [
        { name: searchRegex },
        { description: searchRegex },
        { brand: searchRegex },
      ];
    }

    // sorting logic

    let sort = {};

    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;

        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // fetch products and apply sorting and limiting

    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      length: products.length,
      products,
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

export default getAllProducts;
