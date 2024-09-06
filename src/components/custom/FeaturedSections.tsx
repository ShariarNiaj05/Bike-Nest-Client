import { TBike } from "@/types";
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

const bikes: TBike[] = [
  {
    _id: "1",
    brand: "Trek",
    model: "FX 3 Disc",
    imageUrl: "/images/trek-bike.jpg",
    pricePerHour: 1200,
    isAvailable: true,
    cc: 250,
    year: 2022,
    name: "Trek FX 3 Disc",
    description:
      "A versatile hybrid bike with a lightweight frame, hydraulic disc brakes, and durable tires.",
  },
  {
    _id: "2",
    brand: "Giant",
    model: "Escape 3",
    imageUrl: "/images/giant-bike.jpg",
    pricePerHour: 800,
    isAvailable: true,
    cc: 200,
    year: 2021,
    name: "Giant Escape 3",
    description:
      "A lightweight and durable bike, perfect for commuting and casual rides.",
  },
  {
    _id: "3",
    brand: "Specialized",
    model: "Sirrus X 4.0",
    imageUrl: "/images/specialized-bike.jpg",
    pricePerHour: 1500,
    isAvailable: true,
    cc: 300,
    year: 2023,
    name: "Specialized Sirrus X 4.0",
    description:
      "An advanced hybrid bike designed for fitness and adventure rides, offering excellent control.",
  },
];

export default FeaturedSections;
