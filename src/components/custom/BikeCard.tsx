import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const BikeCard = ({ bike }) => {
  const navigate = useNavigate();

  const handleViewDetail = (id: number) => {
    navigate(`/bikes/${id}`); // Redirect to bike detail page
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border border-primary transform transition-transform duration-300 hover:scale-105">
      <img
        src={bike.image}
        alt={bike.brand}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{bike.brand}</h3>
      <p className="text-gray-600 mb-4">Model: {bike.model}</p>
      <p className="text-gray-800 font-bold mb-4">Price: ${bike.price}</p>
      <Button onClick={() => handleViewDetail(bike.id)}>View Details</Button>
    </div>
  );
};

export default BikeCard;
