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
export type TBike = {
  _id: string;
  brand: string;
  model: string;
  imageUrl: string;
  pricePerHour: number;
  isAvailable?: boolean; // Defaults to true if not provided
  cc: number;
  year: number;
  name: string;
  description: string;
};

const bikes: TBike[] = [
  {
    _id: "1",
    brand: "Trek",
    model: "FX 3 Disc",
    imageUrl: "/images/trek-bike.jpg",
    pricePerHour: 1200,
  },
  {
    _id: "2",
    brand: "Giant",
    model: "Escape 3",
    imageUrl: "/images/giant-bike.jpg",
    pricePerHour: 800,
  },
  {
    _id: "3",
    brand: "Specialized",
    model: "Sirrus X 4.0",
    imageUrl: "/images/specialized-bike.jpg",
    pricePerHour: 1500,
  },
];

export default FeaturedSections;
