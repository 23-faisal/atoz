import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Slider = ({ newArrivals }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-screen md:w-full  "
    >
      <CarouselContent className=" space-x-6  placeholder:">
        {newArrivals?.map((product, index) => (
          <CarouselItem
            key={index}
            className="min-w-[100%]  sm:min-w-[50%] md:min-w-[30%] object-cover  basis-1 md:basis-2 lg:basis-3  relative "
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-screen md:w-full  h-[500px] object-cover  "
            />
            <div className="absolute w-full  bottom-0 right-0  bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg ">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium ml-4">{product.name}</h4>
                <p className="mt-1  ml-4">$ {product.price}</p>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default Slider;
