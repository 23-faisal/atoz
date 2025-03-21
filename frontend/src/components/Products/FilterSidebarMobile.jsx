import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaFilter } from "react-icons/fa";

const FilterSidebarMobile = () => {
  return (
    <Sheet className="block lg:hidden ">
      <SheetTrigger asChild>
        <div className="w-full flex justify-center">
          <button className="lg:hidden w-[400px]   my-4   border p-2 rounded-md flex justify-center items-center">
            <FaFilter />
          </button>
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
          <SheetDescription>
            Adjust the filters to refine your search.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              id="category"
              placeholder="Enter category"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price Range
            </Label>
            <Input
              id="price"
              placeholder="Enter price range"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSidebarMobile;
