import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://github.com/ShariarNiaj05/Bike-Nest-Client/blob/main/src/assets/nav-bike.jpg?raw=true')",
      }}
    >
      {/* video background */}
      {/* <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="https://www.youtube.com/watch?v=U9AnEaC1J8k" type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for better text readability */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Find Your Perfect Bike</h1>
        <p className="text-xl mb-8">
          Choose from a variety of bikes suited to your needs
        </p>

        <div className="flex items-center w-full max-w-md bg-white rounded-md overflow-hidden p-3 gap-2 my-5">
          <Input
            type="text"
            placeholder="Search for bikes..."
            className="flex-grow p-4 text-gray-900 px-2"
          />
          <button className="bg-primary text-white px-2 py-2 rounded-full">
            <FaSearch />
          </button>
        </div>
        <Button>Browse All Bikes</Button>
      </div>
    </div>
  );
};

export default HeroSection;
