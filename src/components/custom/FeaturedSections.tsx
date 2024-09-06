import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const FeaturedSections = () => {
  const navigate = useNavigate();

  const handleViewDetail = (id: number) => {
    navigate(`/bikes/${id}`); // Redirect to bike detail page
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Available Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={bike.image}
                alt={bike.brand}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{bike.brand}</h3>
              <p className="text-gray-600 mb-4">Model: {bike.model}</p>
              <p className="text-gray-800 font-bold mb-4">
                Price: ${bike.price}
              </p>
              <Button onClick={() => handleViewDetail(bike.id)}>
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface Bike {
  id: number;
  brand: string;
  model: string;
  image: string;
  price: number;
}

const bikes: Bike[] = [
  {
    id: 1,
    brand: "Trek",
    model: "FX 3 Disc",
    image: "/images/trek-bike.jpg",
    price: 1200,
  },
  {
    id: 2,
    brand: "Giant",
    model: "Escape 3",
    image: "/images/giant-bike.jpg",
    price: 800,
  },
  {
    id: 3,
    brand: "Specialized",
    model: "Sirrus X 4.0",
    image: "/images/specialized-bike.jpg",
    price: 1500,
  },
];

export default FeaturedSections;
