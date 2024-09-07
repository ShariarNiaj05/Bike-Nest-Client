import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TBike } from "@/types";
import { bikesData } from "./Bikes";
import { useState, useEffect } from "react";

const BikeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the bike based on the ID from the URL
  const bike = bikesData.find((bike: TBike) => bike._id === id);

  // Initialize state for selected bikes
  const [selectedBikes, setSelectedBikes] = useState<TBike[]>([]);

  useEffect(() => {
    if (bike) {
      // Initialize selected bikes based on the bike's brand
      const brandBikes = bikesData.filter(
        (b: TBike) => b.brand === bike.brand && b._id !== bike._id
      );
      setSelectedBikes([bike, ...brandBikes.slice(0, 2)]); // Include current bike and up to 2 more from the same brand
    }
  }, [bike]);

  const handleBookNow = () => {
    navigate(`/booking/${bike?._id}`);
  };

  const handleAddToCompare = async () => {
    // Perform server action here
    // For example:
    // await fetch('/api/add-to-compare', { method: 'POST', body: JSON.stringify({ bikeId: bike?._id }) });
    // Update the dashboard or show a message
  };

  if (!bike) {
    return <div>Bike not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="w-full h-64 lg:h-96 bg-gray-200">
          <img
            src={bike.imageUrl}
            alt={bike.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Bike Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {bike.name}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{bike.description}</p>

            {/* Other Bike Details */}
            <div className="flex flex-col gap-2">
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
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Button
              className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition-all"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
            <Button
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition-all"
              onClick={handleAddToCompare}
            >
              Add to Compare
            </Button>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      {selectedBikes.length > 1 && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Comparison</h2>
          <table className="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Feature</th>
                {selectedBikes.map((bike) => (
                  <th className="p-4" key={bike._id}>
                    {bike.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-medium">Brand</td>
                {selectedBikes.map((bike) => (
                  <td className="p-4" key={bike._id}>
                    {bike.brand}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium">Model</td>
                {selectedBikes.map((bike) => (
                  <td className="p-4" key={bike._id}>
                    {bike.model}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium">CC</td>
                {selectedBikes.map((bike) => (
                  <td className="p-4" key={bike._id}>
                    {bike.cc}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium">Year</td>
                {selectedBikes.map((bike) => (
                  <td className="p-4" key={bike._id}>
                    {bike.year}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium">Availability</td>
                {selectedBikes.map((bike) => (
                  <td className="p-4" key={bike._id}>
                    {bike.isAvailable ? "Available" : "Not Available"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium">Price</td>
                {selectedBikes.map((bike) => (
                  <td className="p-4 font-bold text-primary" key={bike._id}>
                    ${bike.pricePerHour}/hour
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BikeDetail;
