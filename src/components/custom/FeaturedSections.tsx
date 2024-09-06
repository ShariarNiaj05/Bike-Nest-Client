import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import BikeCard from "./BikeCard";

const FeaturedSections = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Available Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Bike {
  _id: number;
  brand: string;
  model: string;
  image: string;
  price: number;
}

const bikes: Bike[] = [
  {
    _id: 1,
    brand: "Trek",
    model: "FX 3 Disc",
    image: "/images/trek-bike.jpg",
    price: 1200,
  },
  {
    _id: 2,
    brand: "Giant",
    model: "Escape 3",
    image: "/images/giant-bike.jpg",
    price: 800,
  },
  {
    _id: 3,
    brand: "Specialized",
    model: "Sirrus X 4.0",
    image: "/images/specialized-bike.jpg",
    price: 1500,
  },
];

export default FeaturedSections;
