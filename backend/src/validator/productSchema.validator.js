import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number({ invalid_type_error: "Price must be a number" }),
  discountPrice: z.number().optional(),
  countInStock: z.number().int().min(0, "Count must be a non-negative integer"),
  category: z.string().min(1, "Category is required"),
  sku: z.string().min(1, "SKU is required"),
  brand: z.string().optional(),
  sizes: z.array(z.string()).min(1, "At least one size is required"),
  colors: z.array(z.string()).min(1, "At least one color is required"),
  collections: z.string().min(1, "Collection is required"),
  material: z.string().optional(),
  gender: z.enum(["Men", "Women", "Unisex"]).optional(),
  images: z
    .array(
      z.object({
        url: z.string().url("Image URL must be valid"),
        altText: z.string().optional(),
      })
    )
    .min(1, "At least one image is required"),
  isFeatured: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  dimensions: z
    .object({
      length: z.number().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
    })
    .optional(),
  weight: z.number().optional(),
});

export default productSchema;
