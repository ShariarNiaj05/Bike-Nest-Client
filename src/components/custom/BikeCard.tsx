import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { TBike } from "@/types";
// import { useRouter } from "next/navigation"

const BikeCard = ({ bike }: { bike: TBike }) => {
  const navigate = useNavigate();

  // const handleViewDetail = (id: string) => {
  //   console.log(id);
  //   navigate(`/bikes/${id}`); // Redirect to bike detail page
  // };


  // Provide default values if bike is undefined
  const {
    _id = '',
    name = 'Unknown Bike',
    brand = 'Unknown Brand',
    model = 'Unknown Model',
    cc = 0,
    year = new Date().getFullYear(),
    pricePerHour = 0,
    imageUrl = '/placeholder.svg?height=200&width=200',
    colors = [],
    availability = 'Out of Stock'
  } = bike || {}

  const handleViewDetail = (id: string) => {
    if (id) {
      navigate(`/bikes/${id}`);
    }
  }

  // Use the colors from the bike, or default colors if not provided
  const bikeColors = colors.length > 0 ? colors : ["#FF6B6B", "#868E96", "#63E6BE", "#74C0FC"]


  return (
    // <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border border-transparent transition-all duration-300 hover:shadow-xl hover:border-primary transform hover:scale-105">
    //   {/* Image section with gradient background */}
    //   <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-primary rounded-md mb-4 overflow-hidden">
    //     <img
    //       src={bike?.imageUrl}
    //       alt={bike?.brand}
    //       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
    //     />
    //   </div>

    //   {/* Bike Name */}
    //   <h3 className="text-2xl font-bold text-primary mb-2">{bike?.name}</h3>

    //   {/* Bike Brand and Model */}
    //   <p className="text-gray-700 font-medium mb-2">
    //     <span className="font-semibold text-gray-800">Brand:</span>{" "}
    //     {bike?.brand}
    //   </p>
    //   <p className="text-gray-700 font-medium mb-2">
    //     <span className="font-semibold text-gray-800">Model:</span>{" "}
    //     {bike?.model}
    //   </p>

    //   {/* Bike CC and Year */}
    //   <p className="text-gray-700 font-medium mb-2">
    //     <span className="font-semibold text-gray-800">CC:</span> {bike?.cc}
    //   </p>
    //   <p className="text-gray-700 font-medium mb-2">
    //     <span className="font-semibold text-gray-800">Year:</span> {bike?.year}
    //   </p>

    //   {/* Bike Price */}
    //   <p className="text-lg font-bold text-gray-900 mb-4">
    //     Price: ${bike?.pricePerHour}/hour
    //   </p>

    //   {/* View Details Button */}
    //   <Button
    //     className="px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-secondary hover:shadow-lg transition-all duration-300"
    //     onClick={() => handleViewDetail(bike?._id as string)}
    //   >
    //     View Details
    //   </Button>
    // </div>
  );
};

export default BikeCard;
