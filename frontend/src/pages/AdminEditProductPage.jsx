import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// Zod schema for validation
const productSchema = z.object({
  _id: z.string(), // Assuming _id is a string (common in MongoDB)
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be greater than 0"),
  discountPrice: z
    .number({ invalid_type_error: "Discount price must be a number" })
    .positive("Discount price must be greater than 0")
    .optional(), // Discount price is optional
  countInStock: z
    .number({ invalid_type_error: "Stock must be a number" })
    .nonnegative("Stock must be 0 or more"),
  sku: z.string().min(1, "SKU is required"),
  category: z.string().min(1, "Category is required"),
  brand: z.string().min(1, "Brand is required"),
  sizes: z.array(z.string()).min(1, "At least one size is required"),
  colors: z.array(z.string()).min(1, "At least one color is required"),
  collections: z.string().optional(),
  material: z.string().optional(),
  gender: z.enum(["Men", "Women"]).optional(),
  images: z
    .array(
      z.object({
        url: z.string().url("Invalid URL format"),
        altText: z.string().optional(),
      })
    )
    .min(1, "At least one image is required"),
  rating: z
    .number({ invalid_type_error: "Rating must be a number" })
    .min(0, "Rating cannot be negative")
    .max(5, "Rating cannot be more than 5")
    .optional(),
  numReviews: z
    .number({ invalid_type_error: "Number of reviews must be a number" })
    .nonnegative("Number of reviews cannot be negative")
    .int("Number of reviews must be an integer")
    .optional(),
});

const AdminEditProductPage = () => {
  const defaultProduct = {
    _id: "product1",
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=39",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=40",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: defaultProduct,
  });

  const onSubmit = (data) => {
   console.log(data);
   
    toast.success("Product updated successfully!");
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 shadow-md rounded">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product name */}
        <div className="mb-4">
          <Label>Product Name</Label>
          <Input type="text" placeholder="Product Name" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <Label>Description</Label>
          <Textarea
            rows={4}
            placeholder="Product description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <Label>Price</Label>
          <Input
            type="number"
            step="0.01"
            placeholder="Price"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Stock */}
        <div className="mb-4">
          <Label>Stock</Label>
          <Input
            type="number"
            placeholder="Stock"
            {...register("countInStock", { valueAsNumber: true })}
          />
          {errors.countInStock && (
            <p className="text-sm text-red-500">
              {errors.countInStock.message}
            </p>
          )}
        </div>

        {/* SKU */}
        <div className="mb-4">
          <Label>SKU</Label>
          <Input type="text" placeholder="SKU" {...register("sku")} />
          {errors.sku && (
            <p className="text-sm text-red-500">{errors.sku.message}</p>
          )}
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <Label>Sizes (comma-separated)</Label>
          <Input
            type="text"
            placeholder="e.g. S, M, L"
            {...register("sizes")}
          />
          {errors.sizes && (
            <p className="text-sm text-red-500">{errors.sizes.message}</p>
          )}
        </div>

        {/* Colors */}
        <div className="mb-4">
          <Label>Colors (comma-separated)</Label>
          <Input
            type="text"
            placeholder="e.g. Red, Blue, Green"
            {...register("colors")}
          />
          {errors.colors && (
            <p className="text-sm text-red-500">{errors.colors.message}</p>
          )}
        </div>

        {/* Images */}
        <div className="mb-4">
          <Label>Images (Max 6)</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            {...register("images")}
          />
          {errors.images && (
            <p className="text-sm text-red-500">{errors.images.message}</p>
          )}

          <div className="mt-2 flex flex-wrap gap-2">
            {/* show image here */}

            {defaultProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || "Product Image"}
                className="h-20 w-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <Button type="submit" className="mt-4 w-full ">
          Update Product
        </Button>
      </form>
    </div>
  );
};

export default AdminEditProductPage;
