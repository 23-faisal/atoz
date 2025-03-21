import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  // Memoized filter options to prevent unnecessary re-renders
  const categories = useMemo(() => ["Top Wear", "Bottom Wear"], []);
  const colors = useMemo(
    () => [
      "Red",
      "Blue",
      "Black",
      "Green",
      "Yellow",
      "Gray",
      "White",
      "Pink",
      "Beige",
      "Navy",
    ],
    []
  );
  const sizes = useMemo(() => ["XS", "S", "M", "L", "XL", "XXL"], []);
  const genders = useMemo(() => ["Men", "Women"], []);
  const brands = useMemo(
    () => [
      "Urban Threads",
      "Modern Fit",
      "Street Style",
      "Beach Breeze",
      "Fashionista",
      "ChickStyle",
    ],
    []
  );

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFilters((prev) => {
      let newFilters = { ...prev };

      if (name === "color") {
        // Toggle color selection
        newFilters.color = newFilters.color === value ? "" : value;
      } else if (type === "checkbox") {
        // Handle checkbox selection (size, material, brand)
        newFilters[name] = checked
          ? [...(newFilters[name] || []), value]
          : newFilters[name].filter((item) => item !== value);
      } else {
        // Handle radio buttons and other inputs
        newFilters[name] = value;
      }

      updateURLParams(newFilters);
      return newFilters;
    });
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.set(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.set(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 100,
    });

    setPriceRange([0, params.maxPrice ? Number(params.maxPrice) : 100]);
  }, [searchParams]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-slate-800 mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <Label className="mb-2 text-xl">Category</Label>
        {categories.map((category, index) => (
          <label
            htmlFor={`category-${category}`}
            key={index}
            className="flex items-center my-2"
          >
            <input
              id={`category-${category}`}
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-slate-300"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <Label className="mb-2 text-xl">Gender</Label>
        {genders.map((gender, index) => (
          <label
            htmlFor={`gender-${gender}`}
            key={index}
            className="flex items-center my-2"
          >
            <input
              id={`gender-${gender}`}
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-slate-300"
            />
            <span className="text-gray-700">{gender}</span>
          </label>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <Label className="mb-2 text-xl">Colors</Label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={() =>
                handleFilterChange({ target: { name: "color", value: color } })
              }
              className={`w-8 h-8 mt-2 rounded-full border ${
                filters.color === color
                  ? "border-blue-500 border-4"
                  : "border-gray-300"
              } cursor-pointer transition hover:scale-105`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <Label className="mb-2 text-xl">Sizes</Label>
        {sizes.map((size) => (
          <label
            htmlFor={`size-${size}`}
            key={size}
            className="flex items-center mb-1"
          >
            <input
              type="checkbox"
              name="size"
              id={`size-${size}`}
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300"
            />
            <span>{size}</span>
          </label>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <Label className="mb-2 text-xl">Brand</Label>
        {brands.map((brand) => (
          <label
            htmlFor={`brand-${brand}`}
            key={brand}
            className="flex items-center mb-1"
          >
            <input
              id={`brand-${brand}`}
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-gray-300"
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <Label className="mb-2 text-xl">Price Range</Label>
        <input
          type="range"
          name="maxPrice"
          min={0}
          max={100}
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-slate-600 mt-2">
          <span>$0</span>
          <span>${filters.maxPrice}</span>
          <span>$100</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
