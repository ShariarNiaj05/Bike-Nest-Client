import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-primary text-white">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <div className="bg-primary text-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
