import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the existing sort parameter from URL (default to "default" if not set)
  const selectedSortOption = searchParams.get("sort") || "default";

  const handleSortChange = (value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", value); // Update the 'sort' param
    setSearchParams(newParams); // Update the URL
    console.log("Selected sort option:", value);
  };

  return (
    <div className="flex items-center justify-end mb-4">
      <Select value={selectedSortOption} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="priceAsc">Price: High To Low</SelectItem>
            <SelectItem value="priceDesc">Price: Low To High</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortOptions;
