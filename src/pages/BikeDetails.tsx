import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you're using a Button component
import { TBike } from "@/types";
import { bikesData } from "./Bikes";

const BikeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the bike based on the ID from the URL
  const bike = bikesData.find((bike: TBike) => bike._id === id);

  if (!bike) {
    return <div>Bike not found</div>;
  }

  const handleBookNow = () => {
    navigate(`/booking/${bike._id}`);
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Image */}
        <div className="w-full h-64 bg-gray-200 mb-6">
          <img
            src={bike.imageUrl}
            alt={bike.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Bike Info */}
        <h1 className="text-4xl font-bold text-primary mb-4">{bike.name}</h1>
        <p className="text-lg text-gray-700 mb-4">{bike.description}</p>

        {/* Other Bike Details */}
        <div className="flex flex-wrap gap-4 mb-6">
          <p className="text-lg font-medium">
            <span className="font-semibold">Brand:</span> {bike.brand}
          </p>
          <p className="text-lg font-medium">
            <span className="font-semibold">Model:</span> {bike.model}
          </p>
          <p className="text-lg font-medium">
            <span className="font-semibold">CC:</span> {bike.cc}
          </p>
          <p className="text-lg font-medium">
            <span className="font-semibold">Year:</span> {bike.year}
          </p>
          <p className="text-lg font-medium">
            <span className="font-semibold">Availability:</span>{" "}
            {bike.isAvailable ? "Available" : "Not Available"}
          </p>
          <p className="text-lg font-bold text-primary">
            Price: ${bike.pricePerHour}/hour
          </p>
        </div>

        {/* Book Now Button */}
        <Button
          className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition-all"
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default BikeDetail;
