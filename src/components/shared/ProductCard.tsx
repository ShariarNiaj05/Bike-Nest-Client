import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaBoxesStacked } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { GiBaseballBat } from "react-icons/gi";
import Rating from "react-rating";
import { Star } from "lucide-react";
import { IProduct } from "@/types/products";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card className="text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="p-2">
        <LazyLoadImage
          src={product?.image}
          // scrollPosition={scrollPosition}  ==> on mouse scroll effect using redux
          effect={"blur"}
          threshold={1000}
          wrapperProps={{
            style: { transitionDelay: "0.5s" },
          }}
          className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          alt={product?.productName}
        />
      </CardHeader>
      <CardContent className="grid p-4">
        <div className="flex justify-between items-center gap-2">
          {/* <Star color="orange" fill="orange" /> */}
          <p className="text-xl font-semibold text-gray-400  flex gap-2 items-center">
            {product?.sportsCategory}
            <span>
              {product?.sportsCategory === "Soccer" && <PiSoccerBallFill />}
              {product?.sportsCategory === "Rugby" && <MdOutlineSportsRugby />}
              {product?.sportsCategory === "Baseball" && <GiBaseballBat />}
            </span>
          </p>
          <p className="text-xl font-semibold text-gray-400 flex justify-center items-center gap-2">
            <span className="bg-white p-1 rounded-md">
              <FaBoxesStacked className="text-black" />
            </span>
            {product?.stockQuantity}
          </p>
        </div>

        <CardTitle className="mt-2 text-3xl font-extrabold">
          {product?.productName}
        </CardTitle>

        <CardTitle className="mt-2 text-base font-extrabold flex gap-5 text-gray-400">
          {product?.brand}
          <span className="text-white">${product?.price}</span>
        </CardTitle>
        <p className="text-lg mt-4 text-gray-400">
          {product?.productDescription}
        </p>
      </CardContent>

      <CardFooter className=" flex flex-col">
        {/* @ts-expect-error their is no type declaration file for react rating*/}
        <Rating
          emptySymbol={<Star size={20} color="orange" />}
          fullSymbol={<Star size={20} color="orange" fill="orange" />}
          initialRating={product?.rating}
          readonly
        />
        <Link to={`product/${product?._id}`}>
          <Button variant={"outline"}>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
// http://localhost:5173/product/66903551edc8b9ee6fa9e0b2
// http://localhost:5173/products/product/668d8a28308fab9930241a6c
export default ProductCard;
