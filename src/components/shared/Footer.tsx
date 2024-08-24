import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-3 max-w-7xl min-h-[200px] mx-auto flex justify-between items-center py-5 font-bold">
      <div>
        {" "}
        <Link to={"/"}>Sports Sphere</Link>
      </div>

      <div className="flex gap-2 text-2xl">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaYoutubeSquare />
      </div>
    </div>
  );
};

export default Footer;
