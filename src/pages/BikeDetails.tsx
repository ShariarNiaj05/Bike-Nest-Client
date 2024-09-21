import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TBike } from "@/types";
import { useMemo } from "react";
import { useBikeDetailsQuery, useBikesQuery } from "@/redux/features/bikes";

const BikeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data } = useBikeDetailsQuery(id);
  const bike = data?.data;

  // Fetch all bikes
  const { data: allBikesData } = useBikesQuery(undefined);

  // Get similar bikes based on the brand (you can change the criteria as needed)
  const similarBikes = useMemo(() => {
    const allBikes = allBikesData?.data || [];

    if (bike) {
      return allBikes.filter(
        (b: TBike) => b.brand === bike.brand && b._id !== bike._id
      );
    }
    return [];
  }, [bike, allBikesData?.data]);

  const handleBookNow = () => {
    navigate(`/booking/${bike?._id}`);
  };

  const handleAddToCompare = async () => {
    // server action here
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

      {/* Similar Bikes Section */}
      {similarBikes.length > 0 && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Similar Bikes</h2>
          <table className="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Name</th>
                <th className="p-4">Model</th>
                <th className="p-4">CC</th>
                <th className="p-4">Year</th>
                <th className="p-4">Price/Hour</th>
                <th className="p-4">Availability</th>
              </tr>
            </thead>
            <tbody>
              {similarBikes.map((similarBike) => (
                <tr key={similarBike._id}>
                  <td className="p-4">{similarBike.name}</td>
                  <td className="p-4">{similarBike.model}</td>
                  <td className="p-4">{similarBike.cc}</td>
                  <td className="p-4">{similarBike.year}</td>
                  <td className="p-4 font-bold text-primary">
                    ${similarBike.pricePerHour}/hour
                  </td>
                  <td className="p-4">
                    {similarBike.isAvailable ? "Available" : "Not Available"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BikeDetail;
